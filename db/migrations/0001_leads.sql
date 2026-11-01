-- Migration 0001: Cloudflare D1 Leads & Enquiry Events Schema
-- Cabivella UK Production Architecture

CREATE TABLE IF NOT EXISTS enquiry_events (
  lead_id TEXT PRIMARY KEY,
  idempotency_key TEXT UNIQUE NOT NULL,
  created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  source_path TEXT NOT NULL,
  customer_type TEXT NOT NULL,
  model_id TEXT,
  customer_name TEXT,
  customer_email TEXT,
  customer_phone TEXT,
  postcode TEXT,
  room_dimensions TEXT,
  project_notes TEXT,
  marketing_consent INTEGER NOT NULL DEFAULT 0,
  sync_state TEXT NOT NULL CHECK(sync_state IN ('pending','synced','failed')),
  crm_record_id TEXT,
  last_error_code TEXT,
  last_attempt_at TEXT
);

CREATE INDEX IF NOT EXISTS enquiry_sync_idx ON enquiry_events(sync_state, created_at);
CREATE INDEX IF NOT EXISTS enquiry_idempotency_idx ON enquiry_events(idempotency_key);
