import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 29.99,
      billingCycle: "monthly",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 fitness class per month",
        "Free Wi-Fi",
        "Shower access",
        "Access during non-peak hours",
        "Basic fitness assessment every 6 months",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 49.99,
      billingCycle: "monthly",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited fitness classes",
        "Personalized workout plan",
        "Free Wi-Fi",
        "Access to virtual workout sessions",
        "Guest pass once a month",
        "Priority access to new classes",
        "Monthly fitness assessment",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 79.99,
      billingCycle: "monthly",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited fitness classes",
        "Personalized workout and diet plan",
        "One personal training session per month",
        "Free Wi-Fi",
        "Access to spa and sauna",
        "Access to VIP lounge",
        "Complimentary towel service",
        "Nutritional coaching session every 3 months",
        "24/7 gym access",
      ],
    },
    {
      id: 4,
      name: "Annual Membership",
      price: 499.99,
      billingCycle: "annually",
      features: [
        "All Premium Plan features",
        "Discounted additional personal training sessions",
        "Priority booking for classes",
        "1 guest pass per month",
        "Free access to special workshops and events",
        "Free branded merchandise kit",
        "Annual body composition analysis",
        "Access to exclusive member community",
        "Dedicated locker space",
      ],
    },
    {
      id: 5,
      name: "Day Pass",
      price: 15.0,
      billingCycle: "one-time",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 fitness class access",
        "Free Wi-Fi",
        "Access to spa (limited to 1 hour)",
        "Complimentary towel service",
      ],
    },
  ];

  return (
    <div>
      {/* <PriceOption priceOptions={priceOptions} /> */}
      <h2 className="text-5xl">Best Prices in the town</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-12">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option} />
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
