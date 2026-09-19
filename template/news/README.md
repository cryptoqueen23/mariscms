# MariCMS News Recipe

A reusable news and community publishing recipe built on MariCMS.

## Purpose

This recipe is intended for independent newspapers, community publications, local digital newsrooms, nonprofit newsrooms, and niche publications.

It is deliberately generic. Client branding, geography, sections, authors, and editorial policies should be configured per deployment.

## Core collections

- Stories
- Briefs
- Authors
- Sections
- Opinion

## Story fields

Recommended fields:

- title
- dek
- slug
- author
- section
- publishDate
- updatedDate
- heroImage
- heroAlt
- heroCaption
- imageCredit
- tags
- featured
- breaking
- seoTitle
- seoDescription
- canonicalUrl
- sources
- correctionsNote
- body

## Briefs

Briefs are short, timestamped news updates for developments that do not yet require a full article.

Recommended fields:

- title
- summary
- date
- author
- section
- source links
- related story
- status
- body

## Editorial workflow

Recommended workflow:

Draft -> Review -> Publish

Contributors should not receive direct publishing or repository merge authority unless explicitly granted.

## Pages

The recipe should provide:

- Homepage
- Latest
- Section archive
- Article page
- Brief / live-wire page
- Author page
- Opinion archive
- Search
- About
- Contact
- Editorial Standards
- Corrections
- Privacy
- Accessibility

## Publishing features

- Responsive, mobile-first layouts
- Hero image, caption, alt text, and credit support
- SEO title and description
- Canonical URLs
- Open Graph metadata
- Sitemap
- RSS
- Author pages
- Tags
- Section navigation
- Featured stories
- Breaking-news flag
- Corrections field

## Architecture

```text
MariCMS
   |
   +-- News Recipe
          |
          +-- Stories
          +-- Briefs
          +-- Authors
          +-- Sections
          +-- Opinion
          +-- Editorial workflow
          +-- Homepage
          +-- Search
          +-- RSS
          +-- SEO
          +-- Publisher pages
```

## Not part of the base recipe

Keep specialized features modular rather than building them into every publication:

- advertising platform
- document / receipts repository
- government-record archive
- RSS discovery inbox
- AI summarization
- investigative-case management
- subscription database
- newsletter provider integration

These can be added as optional modules later.
