import { updateSettings } from "sections/settings/settingsSlice";

function updateSettingsHandler(dispatch, fieldName, value) {
    dispatch(updateSettings({fieldName, value}));
}

export default updateSettingsHandler;