import { createClient } from '@sanity/client';
import { collectionsData, type CollectionCategory } from '../data/collections';
import { modelsData, type ModelDetail } from '../data/models';

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID || 'dummy-project-id',
  dataset: process.env.SANITY_DATASET || 'production',
  apiVersion: process.env.SANITY_API_VERSION || '2026-11-01',
  useCdn: true
});

export async function getApprovedCollections(): Promise<CollectionCategory[]> {
  // If sanity credentials exist in environment, query sanity, otherwise use verified static dataset
  if (process.env.SANITY_PROJECT_ID) {
    try {
      const collections = await sanityClient.fetch(
        `*[_type == "category" && approvalStatus == "approved"]{...}`
      );
      if (collections && collections.length > 0) return collections;
    } catch (e) {
      console.warn('Sanity query failed, falling back to static collections dataset');
    }
  }
  return Object.values(collectionsData);
}

export async function getApprovedModels(): Promise<ModelDetail[]> {
  if (process.env.SANITY_PROJECT_ID) {
    try {
      const models = await sanityClient.fetch(
        `*[_type == "model" && approvalStatus == "approved"]{...}`
      );
      if (models && models.length > 0) return models;
    } catch (e) {
      console.warn('Sanity query failed, falling back to static models dataset');
    }
  }
  return Object.values(modelsData);
}

export function getApprovedCollectionBySlug(slug: string): CollectionCategory | undefined {
  return collectionsData[slug];
}

export function getApprovedModelBySlug(slug: string): ModelDetail | undefined {
  return modelsData[slug];
}
