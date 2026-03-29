import Map "mo:core/Map";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Order "mo:core/Order";
import Principal "mo:core/Principal";

actor {
  module Awakening {
    public func compare(a : Awakening, b : Awakening) : Order.Order {
      Principal.compare(a.user, b.user);
    };
  };

  type Awakening = {
    user : Principal;
    status : Text;
  };

  let awakening = Map.empty<Principal, Text>();
  let realityShift = Map.empty<Principal, Bool>();

  // Awakening status functions
  public shared ({ caller }) func updateAwakeningStatus(status : Text) : async () {
    switch (realityShift.get(caller)) {
      case (null) { Runtime.trap("Reality not set yet!") };
      case (?oldStatus) {
        if (not oldStatus and status != "asleep") {
          Runtime.trap("Must be asleep first!");
        };
        realityShift.add(caller, false);
        awakening.add(caller, status);
      };
    };
  };

  public shared ({ caller }) func getAwakeningStatus() : async Text {
    if (not realityShift.containsKey(caller)) { Runtime.trap("Reality not set yet!") };
    switch (awakening.get(caller)) {
      case (null) { Runtime.trap("User does not exist!") };
      case (?status) { status };
    };
  };

  public query ({ caller }) func getAllAwakenings() : async [Awakening] {
    awakening.entries().map(func((u, s)) { { user = u; status = s } }).toArray().sort();
  };

  // Reality shift functions
  public shared ({ caller }) func submitRealityShift(state : Bool) : async () {
    realityShift.add(caller, state);
    if (state) {
      awakening.add(caller, "asleep");
    };
  };

  public query ({ caller }) func getRealityShift() : async Bool {
    switch (realityShift.get(caller)) {
      case (null) { Runtime.trap("Reality not set yet!") };
      case (?val) { val };
    };
  };

  public query func getAllRealityShift() : async [Principal] {
    realityShift.filter(func(_, v) { v == true }).keys().toArray();
  };
};
