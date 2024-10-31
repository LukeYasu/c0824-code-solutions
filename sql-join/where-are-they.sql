select "line1", "district", "cities"."name" as "cities", "countries"."name" as "countries"
from "addresses"
join "cities" using ("cityId")
join "countries" using ("countryId")
limit 10
