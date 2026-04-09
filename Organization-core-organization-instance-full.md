# core-organization-instance-full - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-organization-instance-full**

## Example Organization: core-organization-instance-full

Profile: [Core Organization (Организация)](StructureDefinition-core-organization.md)

**identifier**: TAX/4719008550, `http://fhir.ru/core/systems/frmo`/1.2.643.5.1.13.13.12.2.78.8575, [Core_Ns_Rf_OGRN](NamingSystem-core-ns-rf-ogrn.md)/1024702086420

**name**: САНКТ-ПЕТЕРБУРГСКОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ 'ПСИХИАТРИЧЕСКАЯ БОЛЬНИЦА № 1 ИМ. П.П.КАЩЕНКО'

**alias**: СПБ ГБУЗ 'БОЛЬНИЦА ИМ.П.П.КАЩЕНКО'

**address**: 190005, Россия, г. Санкт-Петербург, наб. р. Фонтанки, д. 132(work)



## Resource Content

```json
{
  "resourceType" : "Organization",
  "id" : "core-organization-instance-full",
  "meta" : {
    "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-organization"]
  },
  "identifier" : [{
    "type" : {
      "coding" : [{
        "code" : "TAX"
      }]
    },
    "system" : "http://fhir.ru/core/systems/inn",
    "value" : "4719008550"
  },
  {
    "system" : "http://fhir.ru/core/systems/frmo",
    "value" : "1.2.643.5.1.13.13.12.2.78.8575"
  },
  {
    "system" : "http://fhir.ru/core/systems/ogrn",
    "value" : "1024702086420"
  }],
  "name" : "САНКТ-ПЕТЕРБУРГСКОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ 'ПСИХИАТРИЧЕСКАЯ БОЛЬНИЦА № 1 ИМ. П.П.КАЩЕНКО'",
  "alias" : ["СПБ ГБУЗ 'БОЛЬНИЦА ИМ.П.П.КАЩЕНКО'"],
  "address" : [{
    "extension" : [{
      "extension" : [{
        "url" : "aoguid",
        "valueIdentifier" : {
          "system" : "urn:hl7-ru:fias:aoguid",
          "value" : "796de636-5fd9-4f3d-97ad-c865c60a024d"
        }
      },
      {
        "url" : "houseguid",
        "valueIdentifier" : {
          "system" : "urn:hl7-ru:fias:houseguid",
          "value" : "19229ca9-d457-4f07-ab86-8d64c868502a"
        }
      }],
      "url" : "https://fhir.ru/ig/core/StructureDefinition/core-ex-address-fias"
    }],
    "use" : "work",
    "type" : "postal",
    "text" : "190005, Россия, г. Санкт-Петербург, наб. р. Фонтанки, д. 132",
    "city" : "Санкт-Петербург",
    "postalCode" : "190005",
    "country" : "Россия"
  }]
}

```
