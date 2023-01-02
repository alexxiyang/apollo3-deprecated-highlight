export function getFieldDef(info: any) {
    const parentTypeFields = info.parentType.getFields();
    return parentTypeFields[info.fieldName];
}

export function getSchemaDirective(info: any, directiveName: string) {
    return info.schema.getDirective(directiveName);
}

/**
 * Get apollo 3 response extensions
 * @param requestContext 
 * @returns 
 */
export function getExtensions(requestContext: any) {
    // apollo 3
    if (!requestContext.response.extensions) {
        requestContext.response.extensions = {};
    }
    return requestContext.response.extensions;
}