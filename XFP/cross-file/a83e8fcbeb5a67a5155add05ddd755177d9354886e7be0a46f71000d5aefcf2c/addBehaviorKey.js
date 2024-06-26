  export function addBehaviorKey(e) {
    return (
      document.body &&
        !this.options.excludeAddBehavior &&
        document.body.addBehavior &&
        e.push({ key: "add_behavior", value: 1 }),
      e
    );
  }