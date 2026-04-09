# Core Related Person Payer (Лицо-плательщик, имеющее связь с пациентом) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core Related Person Payer (Лицо-плательщик, имеющее связь с пациентом)**

## Resource Profile: Core Related Person Payer (Лицо-плательщик, имеющее связь с пациентом) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-related-person-payer | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Related_Person_Payer |

 
Лицо-плательщик, имеющее связь с пациентом 

**Usages:**

* Refer to this Profile: [Core Coverage (Источник финансирования)](StructureDefinition-core-coverage.md)
* Examples for this Profile: [RelatedPerson/core-related-person-payer-instance-full](RelatedPerson-core-related-person-payer-instance-full.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-related-person-payer)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-related-person-payer.csv), [Excel](StructureDefinition-core-related-person-payer.xlsx), [Schematron](StructureDefinition-core-related-person-payer.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-related-person-payer",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-related-person-payer",
  "version" : "1",
  "name" : "Core_Related_Person_Payer",
  "title" : "Core Related Person Payer (Лицо-плательщик, имеющее связь с пациентом)",
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
  "description" : "Лицо-плательщик, имеющее связь с пациентом",
  "fhirVersion" : "4.3.0",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
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
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "RelatedPerson",
  "baseDefinition" : "https://fhir.ru/ig/core/StructureDefinition/core-related-person",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "RelatedPerson",
      "path" : "RelatedPerson"
    },
    {
      "id" : "RelatedPerson.identifier",
      "path" : "RelatedPerson.identifier",
      "short" : "Государственный идентификационный номер налогоплательщика (ИНН)",
      "min" : 1,
      "max" : "1"
    },
    {
      "id" : "RelatedPerson.identifier.type",
      "path" : "RelatedPerson.identifier.type",
      "short" : "Тип идентификатора, кодируется по НСИ"
    },
    {
      "id" : "RelatedPerson.identifier.system",
      "path" : "RelatedPerson.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/inn"
    }]
  }
}

```
