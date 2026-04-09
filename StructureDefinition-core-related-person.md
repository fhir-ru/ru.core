# Core Related Person (Лицо, имеющее связь с пациентом) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core Related Person (Лицо, имеющее связь с пациентом)**

## Resource Profile: Core Related Person (Лицо, имеющее связь с пациентом) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-related-person | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Related_Person |

 
Лицо, имеющее связь с пациентом 

**Usages:**

* Derived from this Profile: [Core Related Person Payer (Лицо-плательщик, имеющее связь с пациентом)](StructureDefinition-core-related-person-payer.md)
* Refer to this Profile: [Core Coverage (Источник финансирования)](StructureDefinition-core-coverage.md)
* Examples for this Profile: [RelatedPerson/core-related-person-instance-full](RelatedPerson-core-related-person-instance-full.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-related-person)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-related-person.csv), [Excel](StructureDefinition-core-related-person.xlsx), [Schematron](StructureDefinition-core-related-person.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-related-person",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-related-person",
  "version" : "1",
  "name" : "Core_Related_Person",
  "title" : "Core Related Person (Лицо, имеющее связь с пациентом)",
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
  "description" : "Лицо, имеющее связь с пациентом",
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
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/RelatedPerson",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "RelatedPerson",
      "path" : "RelatedPerson"
    },
    {
      "id" : "RelatedPerson.patient",
      "path" : "RelatedPerson.patient",
      "type" : [{
        "code" : "Reference",
        "targetProfile" : ["https://fhir.ru/ig/core/StructureDefinition/core-patient"]
      }]
    },
    {
      "id" : "RelatedPerson.address",
      "path" : "RelatedPerson.address",
      "type" : [{
        "code" : "Address",
        "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-address"]
      }]
    }]
  }
}

```
