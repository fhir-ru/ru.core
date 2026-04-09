# Core Address (Адрес) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core Address (Адрес)**

## Data Type Profile: Core Address (Адрес) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-address | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Address |

 
Адрес 

Профиль Core Address типа данных Address обеспечивает возможность указания адреса по национальной адресной системе ФИАС. Профиль использует расширение Core_Ex_Address_FIAS для передачи полей, которые являются типичными при передаче адреса: • Код адресного объекта по ФИАС • Код дома по ФИАС

**Usages:**

* Use this DataType Profile: [Core Organization (Организация)](StructureDefinition-core-organization.md), [Core Patient (Пациент)](StructureDefinition-core-patient.md), [Core Practitioner (Врач/сотрудник)](StructureDefinition-core-practitioner.md) and [Core Related Person (Лицо, имеющее связь с пациентом)](StructureDefinition-core-related-person.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-address)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-address.csv), [Excel](StructureDefinition-core-address.xlsx), [Schematron](StructureDefinition-core-address.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-address",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-address",
  "version" : "1",
  "name" : "Core_Address",
  "title" : "Core Address (Адрес)",
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
  "description" : "Адрес",
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
    "identity" : "vcard",
    "uri" : "http://w3.org/vcard",
    "name" : "vCard Mapping"
  }],
  "kind" : "complex-type",
  "abstract" : false,
  "type" : "Address",
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Address",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Address",
      "path" : "Address"
    },
    {
      "id" : "Address.extension:fias",
      "path" : "Address.extension",
      "sliceName" : "fias",
      "min" : 0,
      "max" : "1",
      "type" : [{
        "code" : "Extension",
        "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-ex-address-fias"]
      }],
      "mustSupport" : true
    },
    {
      "id" : "Address.use",
      "path" : "Address.use",
      "short" : "Целевое назначение адреса: home | work | temp | old | billing"
    },
    {
      "id" : "Address.type",
      "path" : "Address.type",
      "short" : "Тип адреса: postal | physical | both"
    },
    {
      "id" : "Address.text",
      "path" : "Address.text",
      "short" : "Текстовое представление адреса"
    },
    {
      "id" : "Address.line",
      "path" : "Address.line",
      "short" : "Улица"
    },
    {
      "id" : "Address.city",
      "path" : "Address.city",
      "short" : "Город"
    },
    {
      "id" : "Address.state",
      "path" : "Address.state",
      "short" : "Регион"
    },
    {
      "id" : "Address.postalCode",
      "path" : "Address.postalCode",
      "short" : "Почтовый код"
    },
    {
      "id" : "Address.country",
      "path" : "Address.country",
      "short" : "Страна"
    },
    {
      "id" : "Address.period",
      "path" : "Address.period",
      "short" : "Период времени, когда адрес был/является действительным"
    }]
  }
}

```
