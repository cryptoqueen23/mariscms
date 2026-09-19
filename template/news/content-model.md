# News Recipe Content Model

## Stories

| Field | Type | Required | Notes |
|---|---|---:|---|
| title | string | yes | Public headline |
| dek | string | no | Short summary beneath headline |
| slug | string | yes | URL-safe identifier |
| author | relation | yes | Links to Authors |
| section | relation | yes | Links to Sections |
| publishDate | datetime | yes | Publication timestamp |
| updatedDate | datetime | no | Last substantial update |
| heroImage | image | no | Lead image |
| heroAlt | string | when image | Accessibility text |
| heroCaption | string | no | Visible caption |
| imageCredit | string | no | Photographer/source credit |
| tags | list | no | Topic tags |
| featured | boolean | no | Homepage feature |
| breaking | boolean | no | Breaking-news treatment |
| seoTitle | string | no | Search/social title override |
| seoDescription | text | no | Search description |
| canonicalUrl | string | no | Canonical override |
| sources | list | no | Source name, URL, and type |
| correctionsNote | text | no | Published correction/update note |
| body | markdown | yes | Main article |

## Briefs

Short reports and live-wire updates.

| Field | Type | Required |
|---|---|---:|
| title | string | yes |
| summary | text | yes |
| date | datetime | yes |
| author | relation | yes |
| section | relation | no |
| sources | list | no |
| relatedStory | relation | no |
| status | select | no |
| body | markdown | no |

## Authors

Recommended fields:

- name
- slug
- role
- photo
- bio
- email
- website
- social links

## Sections

Recommended fields:

- name
- slug
- description
- displayOrder
- enabled

Sections should be configurable instead of hard-coded into layouts.

## Opinion

Opinion content should be clearly labeled and support an opinion type such as:

- From the Publisher
- Community Voices
- Letters to the Editor
