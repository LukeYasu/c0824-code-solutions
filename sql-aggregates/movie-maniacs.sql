select sum("p"."amount"), "c"."firstName", "c"."lastName"
from "customers" as "c"
join "rentals" as "r" using ("customerId")
join "payments" as "p" using ("rentalId")
group by "c"."customerId"
