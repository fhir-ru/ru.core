# Core CodeSystem NSI Confidentiality (Уровень конфиденциальности медицинского документа) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core CodeSystem NSI Confidentiality (Уровень конфиденциальности медицинского документа)**

## CodeSystem: Core CodeSystem NSI Confidentiality (Уровень конфиденциальности медицинского документа) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-confidentiality | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Cs_Nsi_Confidentiality |

 
НСИ МЗ РФ справочник [Уровень конфиденциальности медицинского документа](http://fhir.ru/core/CodeSystem/core-cs-nsi-confidentiality) 

 This Code system is referenced in the content logical definition of the following value sets: 

* This CodeSystem is not used here; it may be used elsewhere (e.g. specifications and/or implementations that use this content)



## Resource Content

```json
{
  "resourceType" : "CodeSystem",
  "id" : "core-cs-nsi-confidentiality",
  "url" : "https://fhir.ru/ig/core/CodeSystem/core-cs-nsi-confidentiality",
  "version" : "1",
  "name" : "Core_Cs_Nsi_Confidentiality",
  "title" : "Core CodeSystem NSI Confidentiality (Уровень конфиденциальности медицинского документа)",
  "status" : "active",
  "experimental" : false,
  "date" : "2026-04-09T17:27:53+00:00",
  "publisher" : "HL7 FHIR Россия",
  "contact" : [{
    "name" : "HL7 FHIR Россия",
    "telecom" : [{
      "system" : "url",
      "value" : "https://fhir.ru"
    }]
  }],
  "description" : "НСИ МЗ РФ справочник [Уровень конфиденциальности медицинского документа](http://fhir.ru/core/CodeSystem/core-cs-nsi-confidentiality)",
  "caseSensitive" : false,
  "content" : "complete",
  "count" : 3,
  "concept" : [{
    "code" : "1",
    "display" : "Обычный доступ"
  },
  {
    "code" : "2",
    "display" : "Ограниченный доступ"
  },
  {
    "code" : "3",
    "display" : "Крайне ограниченный доступ"
  }]
}

```
