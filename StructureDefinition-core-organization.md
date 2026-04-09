# Core Organization (Организация) - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **Core Organization (Организация)**

## Resource Profile: Core Organization (Организация) 

| | |
| :--- | :--- |
| *Official URL*:https://fhir.ru/ig/core/StructureDefinition/core-organization | *Version*:1 |
| Active as of 2026-04-09 | *Computable Name*:Core_Organization |

 
Организация 

Профиль Core Organization ресурса Organization отражает российские особенности учета организаций, в том числе медицинских. • Обязательность указания названия организации • Указание адреса по национальной адресной системе • Возможность идентификации организации по номеру в налоговой системе (ИНН), в государственном регистре юридических лиц (ОГРН) • Возможность идентификации медицинской организации по регистру Минздрава РФ (ФРМО)

Профиль может быть использован при передаче информации об организации – исполнителе медицинских услуг, направляющей организации, страховщике, работодателе какого-либо физического лица. При передаче информации об организации-плательщике должен использоваться профиль Organization Payer.

**Usages:**

* Derived from this Profile: [Core Organisation Payer (Организация-плательщик)](StructureDefinition-core-organization-payer.md)
* Refer to this Profile: [Core PractitionerRole (Роль/должность сотрудника)](StructureDefinition-core-practitioner-role.md)
* Examples for this Profile: [САНКТ-ПЕТЕРБУРГСКОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ 'ПСИХИАТРИЧЕСКАЯ БОЛЬНИЦА № 1 ИМ. П.П.КАЩЕНКО'](Organization-core-organization-instance-full.md)

You can also check for [usages in the FHIR IG Statistics](https://packages2.fhir.org/xig/ru.core|current/StructureDefinition/core-organization)

### Formal Views of Profile Content

 [Description of Profiles, Differentials, Snapshots and how the different presentations work](http://build.fhir.org/ig/FHIR/ig-guidance/readingIgs.html#structure-definitions). 

 

Other representations of profile: [CSV](StructureDefinition-core-organization.csv), [Excel](StructureDefinition-core-organization.xlsx), [Schematron](StructureDefinition-core-organization.sch) 



## Resource Content

```json
{
  "resourceType" : "StructureDefinition",
  "id" : "core-organization",
  "url" : "https://fhir.ru/ig/core/StructureDefinition/core-organization",
  "version" : "1",
  "name" : "Core_Organization",
  "title" : "Core Organization (Организация)",
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
  "description" : "Организация",
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
  "baseDefinition" : "http://hl7.org/fhir/StructureDefinition/Organization",
  "derivation" : "constraint",
  "differential" : {
    "element" : [{
      "id" : "Organization",
      "path" : "Organization"
    },
    {
      "id" : "Organization.identifier",
      "path" : "Organization.identifier",
      "slicing" : {
        "discriminator" : [{
          "type" : "value",
          "path" : "system"
        }],
        "description" : "Нарезка по системам: Система выдачи индивидуальных номеров налогоплательщика(ИНН), Справочник ФРМО, Система выдачи государственных регистрационных номеров ЮЛ (ИП) (ОГРН)",
        "rules" : "open"
      }
    },
    {
      "id" : "Organization.identifier:INN",
      "path" : "Organization.identifier",
      "sliceName" : "INN",
      "short" : "Государственный идентификационный номер налогоплательщика (ИНН)",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Organization.identifier:INN.type",
      "path" : "Organization.identifier.type",
      "short" : "Тип идентификатора, кодируется по Fixed value: http://terminology.hl7.org/CodeSystem/v2-0203",
      "min" : 1,
      "patternCodeableConcept" : {
        "coding" : [{
          "code" : "TAX"
        }]
      }
    },
    {
      "id" : "Organization.identifier:INN.system",
      "path" : "Organization.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/inn"
    },
    {
      "id" : "Organization.identifier:FRMO",
      "path" : "Organization.identifier",
      "sliceName" : "FRMO",
      "short" : "Федеральный реестр медицинских органзаций МЗ РФ (ФРМО)",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Organization.identifier:FRMO.type",
      "path" : "Organization.identifier.type",
      "short" : "Тип идентификатора, кодируется по НСИ"
    },
    {
      "id" : "Organization.identifier:FRMO.system",
      "path" : "Organization.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/frmo"
    },
    {
      "id" : "Organization.identifier:OGRN",
      "path" : "Organization.identifier",
      "sliceName" : "OGRN",
      "short" : "Основной государственный регистрационный номер юридического лица (индивидуального предпринимателя) (ОГРН)",
      "min" : 0,
      "max" : "1"
    },
    {
      "id" : "Organization.identifier:OGRN.type",
      "path" : "Organization.identifier.type",
      "short" : "Тип идентификатора, кодируется по Fixed value: http://fhir.ru/core/systems/ogrn"
    },
    {
      "id" : "Organization.identifier:OGRN.system",
      "path" : "Organization.identifier.system",
      "min" : 1,
      "patternUri" : "http://fhir.ru/core/systems/ogrn"
    },
    {
      "id" : "Organization.name",
      "path" : "Organization.name",
      "short" : "Полное название организации",
      "min" : 1,
      "mustSupport" : true
    },
    {
      "id" : "Organization.alias",
      "path" : "Organization.alias",
      "short" : "Сокращенное наименование организации"
    },
    {
      "id" : "Organization.address",
      "path" : "Organization.address",
      "short" : "Адрес организации",
      "type" : [{
        "code" : "Address",
        "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-address"]
      }]
    }]
  }
}

```
