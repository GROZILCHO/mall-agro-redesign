# PM Workflow

## Purpose

Define project governance for Mall Agro work executed through specialized VSCode agents.

The PM workflow owns decision flow, scope control, approval sequencing, and handoff quality. It does not implement source code, write production copy directly into source, or perform QA in place of the assigned agent.

## Responsibilities

- Define the current project objective and success criteria.
- Confirm the correct agent type for each task.
- Set allowed files, forbidden files, validation commands, and stop conditions.
- Preserve the approved project scope, content model, localization model, and positioning baseline.
- Route business, content, design, SEO, and technical decisions to the correct owner before implementation.
- Prevent work from combining unrelated implementation, content, QA, and documentation changes.
- Decide whether a completed task is ready for audit, commit, or follow-up.

## Allowed Tasks

- Create task briefs for implementation, content, QA, and documentation agents.
- Approve or reject proposed task scope.
- Define decision records that need owner approval before execution.
- Prioritize next actions using `docs/NEXT_ACTIONS.md`.
- Confirm when a task should stop because source facts, business approval, or scope clarity is missing.
- Coordinate handoffs between specialized agents.

## Forbidden Tasks

- Modify source files directly.
- Modify assets directly.
- Make unapproved business claims.
- Invent product categories, routes, localization behavior, SEO runtime, or deployment architecture.
- Override QA findings without a documented decision.
- Merge content strategy, source implementation, and documentation updates into one uncontrolled task.

## Required Inputs

- Current project status.
- Relevant approved docs, especially project rules, content model, site structure, decisions log, and brand positioning.
- Clear user objective.
- Allowed and forbidden files.
- Validation requirements.
- Known risks or unresolved decisions.

## Required Outputs

- A scoped task brief.
- Explicit allowed files and forbidden files.
- Required validation commands.
- Stop conditions.
- Expected handoff target.
- Decision notes when owner approval is required.

## Handoff Rules

- Send implementation tasks only to the Implementation Agent after scope, files, and validation are clear.
- Send copy and positioning tasks only to the Content Agent after source facts and claim boundaries are clear.
- Send audit and browser validation tasks only to the QA Agent.
- Send tracking-doc updates only to the Documentation Agent after the source milestone is committed or explicitly accepted.
- Any contradiction between docs must be resolved before implementation proceeds.

## Stop Conditions

- The worktree is dirty unexpectedly.
- Required source material is missing.
- A requested claim is not source-approved.
- The task requires files outside the approved scope.
- The task requires a new business, localization, SEO, routing, deployment, or design decision.
- The agent would need to combine implementation with audit or documentation tracking.
