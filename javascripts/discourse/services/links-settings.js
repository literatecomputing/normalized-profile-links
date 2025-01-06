import Service from "@ember/service";

export default class NormalizedProfileLinks extends Service {
  normalizeUsername(input) {
    if (!input) {
      return null;
    }

    // Get the last segment after / or @
    const match = input.match(/[/@]([^/@\s]+)$/);
    // const match = input.match(/(@[^/@\s]+|[^/@\s]+)$/);
    return match ? match[1] : input.trim();
  }

  normalizeUserLink(input, baseUrl) {
    const username = this.normalizeUsername(input);
    if (!username || !baseUrl) {
      return null;
    }

    const normalizedBase = baseUrl.endsWith("/") || baseUrl.endsWith("@") ? baseUrl : baseUrl + "/";
    return `${normalizedBase}${username}`;
  }

  fieldOptions(model) {
    const userFields = model?.user_fields;
    const profileLinks = settings.profile_links;
    const siteUserFields = model.site?.user_fields;
    if (userFields === undefined) {
      return null;
    }

    return profileLinks
      .map((field) => {
        // console.log("doing this userField icon", field.icon);
        const fieldName = field.custom_field_name;
        const url = field.url;
        // console.log("fieldName/url", fieldName, url);

        // const siteUserField = model.site?.user_fields.filterBy(
        //   "custom_field_name",
        //   field.link.value
        // )[0];

        const fieldId = siteUserFields.filterBy("name", fieldName)[0]?.id;
        const handle = userFields[fieldId];

        // console.log("field", field, handle);

        if (fieldName) {
          field.name = fieldName;
        }

        if (handle) {
          field.href = this.normalizeUserLink(handle, url);
          field.handle = this.normalizeUsername(handle);
        } else {
          return null;
        }

        // if (siteUserField && userFields[siteUserField.id]) {
        //   const socialLinkValue = userFields[siteUserField.id];
        //   field.href =
        //     (RegExp(baseregex).test(socialLinkValue)
        //       ? socialLinkValue
        //       : base + socialLinkValue) || "";
        // } else {
        //   return null;
        // }

        return field;
      })
      .compact();
  }
}
