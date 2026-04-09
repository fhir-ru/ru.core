# Core Patient Payer (Пациент - плательщик) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core Patient Payer (Пациент - плательщик)**

## Resource Profile: Core Patient Payer (Пациент - плательщик) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-patient-payer | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Patient_Payer |

 
Пациент – плательщик, передача ИНН обязательна 

**Usages:**

* Refer to this Profile: [Core Coverage (Источник финансирования)](StructureDefinition-core-coverage.md)
* Examples for this Profile: [Patient/core-patient-payer-instance-full](Patient-core-patient-payer-instance-full.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-patient-payer)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-patient-payer.csv), [Excel](StructureDefinition-core-patient-payer.xlsx), [Schematron](StructureDefinition-core-patient-payer.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-patient-payer",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-patient-payer",
  "version" : "1",
  "name" : "Core_Patient_Payer",
  "title" : "Core Patient Payer (Пациент - плательщик)",
  "status" : "active",
  "date" : "2026-04-09T17:27:53+00:00",
  "publisher" : "HL7 FHIR Россия",
  "contact" : [{
    "name" : "HL7 FHIR Россия",
    "telecom" : [{
      "system" : "url",
      "value" : "https://fhir.ru"
    }]
  }],
  "description" : "Пациент – плательщик, передача ИНН обязательна",
  "fhirVersion" : "4.3.0",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "cda",
    "uri" : "http://hl7.org/v3/cda",
    "name" : "CDA (R2)"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  },
  {
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "loinc",
    "uri" : "http://loinc.org",
    "name" : "LOINC code for the element"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Patient",
  "baseDefinition" : "https://fhir.ru/ig/core/StructureDefinition/core-patient",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Patient",
      "path" : "Patient"
    },
    {
      "id" : "Patient.identifier",
      "path" : "Patient.identifier",
      "min" : 1
    },
    {
      "id" : "Patient.identifier:INN",
      "path" : "Patient.identifier",
      "sliceName" : "INN",
      "min" : 1
    }]
  }
}

```
