// src/lib/form.ts

/**
 * validateEmail()
 * Simple regex-based email validator.
 */
export function validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  /**
   * trimFormData()
   * Trims all string values in a form data object.
   */
  export function trimFormData<T extends Record<string, any>>(data: T): T {
    const out = { ...data };
    for (const key in out) {
      if (typeof out[key] === 'string') {
        out[key] = out[key].trim();
      }
    }
    return out;
  }
  