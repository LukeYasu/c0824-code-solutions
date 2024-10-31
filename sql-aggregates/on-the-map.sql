select "con"."name", count("city"."name")
from "cities" as "city"
join "countries" as "con" using ("countryId")
group by "con"."countryId"
