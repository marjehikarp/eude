function getMarkPropOrConfig(prop, markDef, config) {
    // Check if the property exists in markDef
    if (markDef && markDef.hasOwnProperty(prop)) {
        return markDef[prop];
    }
    
    // Fallback to config if the property is not found in markDef
    if (config && config.hasOwnProperty(prop)) {
        return config[prop];
    }
    
    // Return undefined if the property is not found in either
    return undefined;
}
