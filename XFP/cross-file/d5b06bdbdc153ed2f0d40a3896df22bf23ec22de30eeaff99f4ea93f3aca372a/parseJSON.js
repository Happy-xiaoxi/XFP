export function parseJSON(e) {
    try {
      return JSON.parse(e);
    } catch (e) {
      return logError("Events.JsonParseError", e), {};
    }
  }