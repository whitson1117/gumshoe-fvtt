import { systemLogger } from "../functions/utilities";

export const registerBabele = () => {
  Hooks.once("babele.init", (babele) => {
    if (babele.setSystemTranslationsDir) {
      babele.setSystemTranslationsDir("lang/babele");
    } else {
      const message =
        "Please make sure you have installed the latest version of Babele (unable to set system translations path).";
      systemLogger.warn(message);
      Hooks.once("ready", () => {
        ui.notifications?.warn(message);
      });
    }
  });
};
