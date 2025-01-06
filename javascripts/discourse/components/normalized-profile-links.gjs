import Component from "@glimmer/component";
import { service } from "@ember/service";
import icon from "discourse-common/helpers/d-icon"; // Assuming this helper is valid.

export default class NormalizedProfileLinks extends Component {
  @service linksSettings;

  get userModel() {
    // Safely fetch the user model from the outlet arguments.
    return this.args.outletArgs?.user || this.args.outletArgs?.model;
  }

  get list() {
    // Get field options and fallback to an empty array if null or undefined.
    return this.linksSettings.fieldOptions(this.userModel) || [];
  }

  <template>
    <div class="normalized-user-fields">
      {{#each this.list as |field|}}
        {{#if field.href}}
          <div>
            {{#unless field.icon}}{{field.title}}:{{/unless}}
            <a
              href={{field.href}}
              rel="noopener noreferrer"
              target="_blank"
              title={{field.handle}}
            >
              {{#if field.icon}}
                {{icon field.icon}}
              {{/if}}
              {{field.handle}}
            </a>
          </div>
        {{/if}}
      {{/each}}
    </div>
  </template>
}
