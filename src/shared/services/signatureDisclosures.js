import { reduce, concat, keyBy, find, map, mapValues } from 'lodash';

/*********************************************************************
 * Helper Functions
 *********************************************************************/
export function textFromParagraphExtractor({ language }) {
  return paragraph => {
    const text = find(paragraph.text, paragraphText => {
      return paragraphText.lang === (language || 'us-en');
    });
    return text.value;
  };
}

/* Extract paragraphs/texts for the disclosure category data */
export function extractParagraphs({ disclosureCategoryData }) {
  const { paragraphs, disclosures } = disclosureCategoryData;
  // extract the collection of paragraphs associated to each disclosures
  const disclosureParagraphs = reduce(
    disclosures,
    (concatenatedParagraphs, disclosure) =>
      concat(concatenatedParagraphs, disclosure.paragraphs),
    []
  );
  // combinte the disclosure paragraphs and the category paragraphs
  const allParagraphs = paragraphs
    ? concat(disclosureParagraphs, paragraphs)
    : concat(disclosureParagraphs);
  // allParagraphs.forEach(e => {
  //   console.log(`allParagraphs: ${JSON.stringify(e, null, 2)}`);
  // });
  const extraxtedTextsFromParagraphs = map(allParagraphs, p => {
    const text = textFromParagraphExtractor({ language: 'us-en' })(p);
    return {
      name: p.name,
      text
    };
  });
  const paragraphCollection = mapValues(
    keyBy(extraxtedTextsFromParagraphs, p => p.name),
    o => o.text
  );
  return paragraphCollection;
}

/*
TODO: pages to implement
  * ELECTRONIC_SIGNATURE = 'ELECTRONIC_SIGNATURE', // Electronic Signature Section
  // MEDICAL_CONFIRMATION = 'MEDICAL_CONFIRMATION', //  Medical Confirmation - (NY ONLY)
  * ELECTRONIC_DELIVERY = 'ELECTRONIC_DELIVERY', // Acknowledgment to Electronic Delivery Section -reg60
  * CALIFORNIA_SENIORS = 'CALIFORNIA_SENIORS', // Notice to California Seniors Section
  // LIFE_INSURANCE_SALES_ILLUSTRATION_NY = 'LIFE_INSURANCE_SALES_ILLUSTRATION_NY', // Life Insurance Sales Illustration Disclosure Section - (NY ONLY)
  // DEFINITION_OF_REPLACEMENT = 'DEFINITION_OF_REPLACEMENT', // Definition of Replacement - (NY ONLY)
  // POLICY_DISCLOSURE_INFORMATION = 'POLICY_DISCLOSURE_INFORMATION', // Reg60-  Policy Disclosure Information - (NY ONLY)
  ! REPLACEMENT_ACKNOWLEDGMENT = 'REPLACEMENT_ACKNOWLEDGMENT', // Replacement Acknowledgment Section
  * HIV_CONSENT_YES = 'HIV_CONSENT_YES', // HIV Consent Yes
  * HIV_CONSENT_NO = 'HIV_CONSENT_NO', // HIV Consent No
  * HIPAA = 'HIPAA', // HIPAA Section
  // ADDITIONAL_AGREEMENTS_NY = 'ADDITIONAL_AGREEMENTS_NY', // Additional Agreements - (NY ONLY)
  // PERSONAL_INFORMATION = 'PERSONAL_INFORMATION', // Peronal Info Disclosure
  // FINAL_IMPORTANT_INFORMATION = 'FINAL_IMPORTANT_INFORMATION', // Final Important Information Section
  // INDETERMINATE_PREMIUM_DISCLOSURE = 'INDETERMINATE_PREMIUM_DISCLOSURE', // Indeterminate Premium Disclosure [Application Disclosure] - (NY ONLY)
  // TERMINAL_ILLNESS_BENEFIT = 'TERMINAL_ILLNESS_BENEFIT', // Terminal Illness Benefit [Application Disclosure] - (NY ONLY)
  ! APPLICATION_ACKNOWLEDGMENT = 'APPLICATION_ACKNOWLEDGMENT', // Application Acknowledgment Section
*/
