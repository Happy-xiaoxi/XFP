
  export function customEntropyFunction(e) {
    return (
      "function" == typeof this.options.customFunction &&
        e.push({ key: "custom", value: this.options.customFunction() }),
      e
    );
  }