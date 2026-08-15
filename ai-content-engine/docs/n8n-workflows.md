# n8n Workflows

This MVP can be implemented as a small set of n8n workflows.

## Workflow 1: Monthly Content Plan Generator

Purpose: create draft content ideas for the next month.

Trigger options:

- Manual trigger.
- Monthly schedule.
- Webhook from an admin panel.

Steps:

1. Read business profile from Google Sheets or Notion.
2. Read existing calendar items for the target month.
3. Build prompt from `prompts/monthly-content-plan.md`.
4. Call OpenAI.
5. Validate returned JSON.
6. Write each generated idea to the calendar store with status `draft`.
7. Create a `monthly_plan_generated` log entry.

Recommended safeguards:

- Do not overwrite existing approved, scheduled, or published posts.
- If the OpenAI response is not valid JSON, save the raw output to logs and stop.
- Include a monthly generation run ID in every created item.

## Workflow 2: Social Post Generator

Purpose: turn selected ideas into captions and platform-specific post copy.

Trigger options:

- Manual trigger for selected rows.
- Status change to `ready_for_caption`.

Steps:

1. Read content item from calendar store.
2. Read business profile.
3. Build prompt from `prompts/social-post-generator.md`.
4. Call OpenAI.
5. Validate returned JSON.
6. Save generated platform copy to the content item.
7. Set status to `needs_review`.
8. Create a `post_caption_generated` log entry.

Recommended safeguards:

- Skip items already approved, scheduled, or published.
- Keep the original idea fields unchanged.
- Save generation notes for the human reviewer.

## Workflow 3: Approval Watcher

Purpose: detect when a human approves or rejects content.

Trigger options:

- Poll Google Sheets or Notion every 15 minutes.
- Webhook from an approval UI.

Steps:

1. Read content items changed since last run.
2. If status is `approved`, confirm `approved_by` and `approved_at`.
3. If status is `rejected`, save reviewer notes.
4. Create approval log events.

Recommended safeguards:

- Do not publish inside this workflow unless approval metadata is complete.
- Keep rejection notes visible to the next generation or edit workflow.

## Workflow 4: PostProxy Publisher

Purpose: publish or schedule approved posts.

Trigger options:

- Manual trigger.
- Schedule every 15 minutes.
- Webhook after approval.

Steps:

1. Read approved content items.
2. Run pre-publish validation.
3. Build PostProxy API request.
4. Send request to PostProxy.
5. Save PostProxy response to the content item.
6. Update status to `scheduled`, `published`, or `failed`.
7. Create publish log entry.

Recommended safeguards:

- Use idempotency keys based on `content_id`.
- Do not submit the same approved item twice if `postproxy_post_id` already exists.
- Stop and log if any required field is missing.

## Workflow 5: Logging

Purpose: centralize event history.

Each workflow should append to the same log destination.

Recommended log fields:

- `log_id`
- `timestamp`
- `event_type`
- `content_id`
- `business_id`
- `workflow_name`
- `status_before`
- `status_after`
- `actor`
- `request_id`
- `message`
- `payload_summary`

## Suggested Google Sheets Tabs

- `Businesses`
- `Content Calendar`
- `Logs`
- `Settings`

## Suggested Notion Databases

- `Businesses`
- `Content Calendar`
- `Publishing Logs`
