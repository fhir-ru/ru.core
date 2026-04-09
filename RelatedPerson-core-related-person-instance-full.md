# core-related-person-instance-full - v1

* [**Table of Contents**](toc.md)
* [**Artifacts Summary**](artifacts.md)
* **core-related-person-instance-full**

## Example RelatedPerson: core-related-person-instance-full

Profile: [Core Related Person (Лицо, имеющее связь с пациентом)](StructureDefinition-core-related-person.md)

**patient**: [Мария-Антуанетта Иоганновна Габсбург-Лотарингская (official) Female, DoB: 1955-01-10 ( 6)](Patient-core-patient-instance-full.md)

**name**: Михаил Иванович Габсбург-Лотарингский (Official)

**gender**: Male

**birthDate**: 1960-10-20

**address**: Россия, г. Санкт-Петербург, Софийская ул., д.32-1-987(home)



## Resource Content

```json
{
  "resourceType" : "RelatedPerson",
  "id" : "core-related-person-instance-full",
  "meta" : {
    "profile" : ["https://fhir.ru/ig/core/StructureDefinition/core-related-person"]
  },
  "patient" : {
    "reference" : "Patient/core-patient-instance-full"
  },
  "name" : [{
    "use" : "official",
    "family" : "Габсбург-Лотарингский",
    "given" : ["Михаил", "Иванович"]
  }],
  "gender" : "male",
  "birthDate" : "1960-10-20",
  "address" : [{
    "extension" : [{
      "extension" : [{
        "url" : "aoguid",
        "valueIdentifier" : {
          "system" : "urn:hl7-ru:fias:aoguid",
          "value" : "7b1996be-c0fe-4797-bedc-f503e31a83fd"
        }
      },
      {
        "url" : "houseguid",
        "valueIdentifier" : {
          "system" : "urn:hl7-ru:fias:houseguid",
          "value" : "7b1996be-c0fe-4797-bedc-f503e31a83fd"
        }
      }],
      "url" : "https://fhir.ru/ig/core/StructureDefinition/core-ex-address-fias"
    }],
    "use" : "home",
    "type" : "postal",
    "text" : "Россия, г. Санкт-Петербург, Софийская ул., д.32-1-987",
    "line" : ["Софийская 32-1-987"],
    "city" : "Санкт-Петербург",
    "state" : "Санкт-Петербург",
    "postalCode" : "192236",
    "country" : "Россия"
  }]
}

```
