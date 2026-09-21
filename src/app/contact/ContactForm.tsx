"use client";

import { FormEvent, useState } from "react";
import styles from "./contact.module.css";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function WarningIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
    </svg>
  );
}

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function validate(next = values): FieldErrors {
    const nextErrors: FieldErrors = {};
    if (!next.name.trim()) nextErrors.name = "Please tell us your name.";
    if (!next.email.trim()) nextErrors.email = "Please enter a valid email address.";
    else if (!EMAIL_RE.test(next.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!next.message.trim()) nextErrors.message = "Please tell us how we can help.";
    return nextErrors;
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      e.preventDefault();
      setErrors(nextErrors);
      return;
    }
    setErrors({});
  }

  function update<K extends keyof typeof values>(key: K, value: string) {
    const next = { ...values, [key]: value };
    setValues(next);
    if (errors[key as keyof FieldErrors]) {
      setErrors(validate(next));
    }
  }

  return (
    <form
      className={styles.form}
      action="mailto:scrambco@aol.com"
      method="post"
      encType="text/plain"
      noValidate
      onSubmit={onSubmit}
    >
      <h2>Send a message</h2>
      <p className={styles.formLead}>
        Questions about catering, banquets, or the menu? We would love to hear from you.
      </p>
      <p className={styles.requiredNote}>Fields marked with an asterisk (*) are required.</p>

      <label className={styles.field}>
        <span>
          Name <span className={styles.req}>*</span>
        </span>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={values.name}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "err-name" : undefined}
          className={errors.name ? styles.inputError : undefined}
          onChange={(e) => update("name", e.target.value)}
        />
        {errors.name ? (
          <span id="err-name" className={styles.error} role="alert">
            <WarningIcon />
            {errors.name}
          </span>
        ) : null}
      </label>

      <label className={styles.field}>
        <span>
          Email <span className={styles.req}>*</span>
        </span>
        <input
          type="email"
          name="email"
          placeholder="you@email.com"
          value={values.email}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "err-email" : undefined}
          className={errors.email ? styles.inputError : undefined}
          onChange={(e) => update("email", e.target.value)}
        />
        {errors.email ? (
          <span id="err-email" className={styles.error} role="alert">
            <WarningIcon />
            {errors.email}
          </span>
        ) : null}
      </label>

      <label className={styles.field}>
        <span>Phone</span>
        <input
          type="tel"
          name="phone"
          placeholder="Optional"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
        />
      </label>

      <label className={styles.field}>
        <span>
          Message <span className={styles.req}>*</span>
        </span>
        <textarea
          name="message"
          rows={5}
          placeholder="How can we help?"
          value={values.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "err-message" : undefined}
          className={errors.message ? styles.inputError : undefined}
          onChange={(e) => update("message", e.target.value)}
        />
        {errors.message ? (
          <span id="err-message" className={styles.error} role="alert">
            <WarningIcon />
            {errors.message}
          </span>
        ) : null}
      </label>

      <button type="submit" className={`btn btn-yellow ${styles.actionBtn}`}>
        Send Message
      </button>
    </form>
  );
}
