/* =========================================================
   SOFT MOM ERA — STAGE 4
   Aura Safety & Escalation Layer
   ========================================================= */

const AURA_SAFETY = {
  urgentPatterns: [
    /difficulty breathing/i,
    /can't breathe/i,
    /cannot breathe/i,
    /chest pain/i,
    /severe bleeding/i,
    /heavy bleeding/i,
    /unresponsive/i,
    /seizure/i,
    /fainted/i,
    /suicid/i,
    /self[- ]?harm/i,
    /overdose/i,
    /poison/i
  ],

  highRiskTopics: [
    /newborn/i,
    /pregnan/i,
    /postpartum/i,
    /medication/i,
    /dose/i,
    /drug/i,
    /diagnos/i,
    /bleeding/i,
    /fever/i,
    /rash/i,
    /injury/i
  ],

  emergencyMessage:
    "This may need urgent professional attention. Aura is not an emergency service and cannot assess you or your child. Please seek appropriate urgent medical or emergency help rather than waiting for an AI response.",

  highRiskMessage:
    "I can share general educational information, but this question may depend on individual medical circumstances. A qualified healthcare professional should assess symptoms, diagnoses, medications or treatment decisions.",

  disclaimer:
    "Aura provides educational information only. It does not diagnose conditions, prescribe treatment or replace qualified healthcare, mental-health or emergency professionals."
};

function auraSafetyCheck(message) {
  const text = String(message || "");

  if (AURA_SAFETY.urgentPatterns.some(pattern => pattern.test(text))) {
    return { level: "urgent", message: AURA_SAFETY.emergencyMessage };
  }

  if (AURA_SAFETY.highRiskTopics.some(pattern => pattern.test(text))) {
    return { level: "high", message: AURA_SAFETY.highRiskMessage };
  }

  return { level: "normal", message: "" };
}
