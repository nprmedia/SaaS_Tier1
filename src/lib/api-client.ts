// src/lib/api-client.ts

/**
 * apiClient()
 * Standardized fetch wrapper for typed requests.
 */
export async function apiClient<T>(
    input: RequestInfo,
    init?: RequestInit
  ): Promise<T> {
    const res = await fetch(input, {
      ...init,
      headers: {
        'Content-Type': 'application/json',
        ...(init?.headers || {}),
      },
    });
  
    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }
  
    return res.json();
  }
  