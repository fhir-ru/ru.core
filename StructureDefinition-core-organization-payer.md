# Core Organisation Payer (Организация-плательщик) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core Organisation Payer (Организация-плательщик)**

## Resource Profile: Core Organisation Payer (Организация-плательщик) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-organization-payer | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Organization_Payer |

 
Организация плательщик 

**Usages:**

* Refer to this Profile: [Core Coverage (Источник финансирования)](StructureDefinition-core-coverage.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-organization-payer)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-organization-payer.csv), [Excel](StructureDefinition-core-organization-payer.xlsx), [Schematron](StructureDefinition-core-organization-payer.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-organization-payer",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-organization-payer",
  "version" : "1",
  "name" : "Core_Organization_Payer",
  "title" : "Core Organisation Payer (Организация-плательщик)",
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
  "description" : "Организация плательщик",
  "fhirVersion" : "4.3.0",
  "mapping" : [{
    "identity" : "v2",
    "uri" : "http://hl7.org/v2",
    "name" : "HL7 v2 Mapping"
  },
  {
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  },
  {
    "identity" : "servd",
    "uri" : "http://www.omg.org/spec/ServD/1.0/",
    "name" : "ServD"
  },
  {
    "identity" : "w5",
    "uri" : "http://hl7.org/fhir/fivews",
    "name" : "FiveWs Pattern Mapping"
  }],
  "kind" : "resource",
  "abstract" : false,
  "type" : "Organization",
  "baseDefinition" : "https://fhir.ru/ig/core/StructureDefinition/core-organization",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Organization",
      "path" : "Organization"
    },
    {
      "id" : "Organization.identifier:INN",
      "path" : "Organization.identifier",
      "sliceName" : "INN"
    },
    {
      "id" : "Organization.identifier:INN.value",
      "path" : "Organization.identifier.value",
      "patternString" : "7806605614"
    },
    {
      "id" : "Organization.identifier:OGRN",
      "path" : "Organization.identifier",
      "sliceName" : "OGRN"
    },
    {
      "id" : "Organization.identifier:OGRN.value",
      "path" : "Organization.identifier.value",
      "patternString" : "1227800154977"
    },
    {
      "id" : "Organization.name",
      "path" : "Organization.name",
      "patternString" : "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ТОРГОВЫЙ ДОМ ЗАВОДЫ СПБ»"
    },
    {
      "id" : "Organization.alias",
      "path" : "Organization.alias",
      "patternString" : "ООО «ТД ЗАВОДЫ СПБ»"
    }]
  }
}

```
