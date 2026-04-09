# Core Extension address fias (Кодирование адреса по ФИАС) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core Extension address fias (Кодирование адреса по ФИАС)**

## Extension: Core Extension address fias (Кодирование адреса по ФИАС) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-ex-address-fias | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Ex_Address_Fias |

Кодирование адреса по ФИАС. При маппинге на СЭМД данный url соответствует urn:hl7-ru:fias

**Context of Use**

**Usage info**

**Usages:**

* Use this Extension: [Core Address (Адрес)](StructureDefinition-core-address.md)
* Examples for this Extension: [САНКТ-ПЕТЕРБУРГСКОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ 'ПСИХИАТРИЧЕСКАЯ БОЛЬНИЦА № 1 ИМ. П.П.КАЩЕНКО'](Organization-core-organization-instance-full.md), [Patient/core-patient-instance-full](Patient-core-patient-instance-full.md), [Patient/core-patient-payer-instance-full](Patient-core-patient-payer-instance-full.md), [Practitioner/core-practitioner-instance-full](Practitioner-core-practitioner-instance-full.md)... Show 2 more, [RelatedPerson/core-related-person-instance-full](RelatedPerson-core-related-person-instance-full.md) and [RelatedPerson/core-related-person-payer-instance-full](RelatedPerson-core-related-person-payer-instance-full.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-ex-address-fias)

### Formal Views of Extension Content

 [Description of Profiles, Differentials, Snapshots, and how the XML and JSON presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-ex-address-fias.csv), [Excel](StructureDefinition-core-ex-address-fias.xlsx), [Schematron](StructureDefinition-core-ex-address-fias.sch) 

#### Terminology Bindings

#### Constraints



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-ex-address-fias",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-ex-address-fias",
  "version" : "1",
  "name" : "Core_Ex_Address_Fias",
  "title" : "Core Extension address fias (Кодирование адреса по ФИАС)",
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
  "description" : "Кодирование адреса по ФИАС. При маппинге на СЭМД данный url соответствует urn:hl7-ru:fias",
  "fhirVersion" : "4.3.0",
  "mapping" : [{
    "identity" : "rim",
    "uri" : "http://hl7.org/v3",
    "name" : "RIM Mapping"
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "context" : [{
    "type" : "element",
    "expression" : "Element"
  }],
  "type" : "Extension",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Extension",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Extension",
      "path" : "Extension",
      "short" : "Core Extension address fias (Кодирование адреса по ФИАС)",
      "definition" : "Кодирование адреса по ФИАС. При маппинге на СЭМД данный url соответствует urn:hl7-ru:fias"
    },
    {
      "id" : "Extension.extension",
      "path" : "Extension.extension",
      "min" : 1
    },
    {
      "id" : "Extension.extension:aoguid",
      "path" : "Extension.extension",
      "sliceName" : "aoguid",
      "min" : 1,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Extension.extension:aoguid.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:aoguid.url",
      "path" : "Extension.extension.url",
      "fixedUri" : "aoguid"
    },
    {
      "id" : "Extension.extension:aoguid.value[x]",
      "path" : "Extension.extension.value[x]",
      "type" : [{
        "code" : "Identifier"
      }]
    },
    {
      "id" : "Extension.extension:aoguid.value[x].system",
      "path" : "Extension.extension.value[x].system",
      "patternUri" : "urn:hl7-ru:fias:aoguid"
    },
    {
      "id" : "Extension.extension:aoguid.value[x].value",
      "path" : "Extension.extension.value[x].value",
      "short" : "GUID адресного объекта.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Extension.extension:houseguid",
      "path" : "Extension.extension",
      "sliceName" : "houseguid",
      "min" : 0,
      "max" : "1",
      "mustSupport" : true
    },
    {
      "id" : "Extension.extension:houseguid.extension",
      "path" : "Extension.extension.extension",
      "max" : "0"
    },
    {
      "id" : "Extension.extension:houseguid.url",
      "path" : "Extension.extension.url",
      "fixedUri" : "houseguid"
    },
    {
      "id" : "Extension.extension:houseguid.value[x]",
      "path" : "Extension.extension.value[x]",
      "type" : [{
        "code" : "Identifier"
      }]
    },
    {
      "id" : "Extension.extension:houseguid.value[x].system",
      "path" : "Extension.extension.value[x].system",
      "patternUri" : "urn:hl7-ru:fias:houseguid"
    },
    {
      "id" : "Extension.extension:houseguid.value[x].value",
      "path" : "Extension.extension.value[x].value",
      "short" : "GUID дома.",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Extension.url",
      "path" : "Extension.url",
      "fixedUri" : "https://fhir.ru/ig/core/StructureDefinition/core-ex-address-fias"
    },
    {
      "id" : "Extension.value[x]",
      "path" : "Extension.value[x]",
      "max" : "0"
    }]
  }
}

```
