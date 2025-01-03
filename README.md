# normalized-profile-links

**Add Links to User Profile and User Card**

Official [Custom Profile Link](https://meta.discourse.org/t/custom-profile-link/295470) adds a link for only one custom field.

[Multiple Custom Profile Links](https://meta.discourse.org/t/multiple-custom-profile-links/295547) is similar to this, but this adds some error checking/fixing of users adding semi-bogus entries.

For example, a user might enter any of these for a Twitter (X):

- https://x.com/MyHandle
- https://twitter.com/MyHandle
- https://www.twitter.com/MyHandle
- x.com/MyHandle
- twitter.com/MyHandle
- /MyHandle
- @MyHandle
- MyHandle

This theme component will make all of those become "MyHandle", so if a user enters any of those in the twitter field, the link will become `https://x.com/MyHandle`.

Settings allow adding any kind of site you wish:

![edit profile links](docs/edit-profile-links.png)

If you require additional [Font Awesome Icons](https://fontawesome.com/v6/search?o=r&m=free) you can add them to the Additional Icons setting.

A bunch of the sample settings are provided by AI completion and not tested. You can make changes to the settings yourself, but if you let me know about a broken one (via email or PR) I will be happy to fix it.

Another feature I have considered is making it possible to have entries appear on only the User Card or User Profile, rather than both. If that's of interest, please let me know, especially if you have a budget.

Thanks to [Gray Arrows Drone Club](https://greyarro.ws/) for funding initial development!
