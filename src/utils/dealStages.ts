export function getDealStages() {
  return [
    {
      stage: "Initial Contact",
      lastActivity: "Match accepted - Awaiting response",
      status: "On Track",
      milestones: [
        { name: "Initial Contact", status: "in-progress" },
        { name: "Asset Delivery", status: "pending" },
        { name: "Due Diligence", status: "pending" },
        { name: "Negotiation", status: "pending" },
        { name: "Deal Closed", status: "pending" }
      ]
    },
    {
      stage: "Asset Delivery",
      lastActivity: "Assets under review",
      status: "On Track",
      milestones: [
        { name: "Initial Contact", status: "completed" },
        { name: "Asset Delivery", status: "in-progress" },
        { name: "Due Diligence", status: "pending" },
        { name: "Negotiation", status: "pending" },
        { name: "Deal Closed", status: "pending" }
      ]
    },
    {
      stage: "Due Diligence",
      lastActivity: "Financial review in progress",
      status: "On Track",
      milestones: [
        { name: "Initial Contact", status: "completed" },
        { name: "Asset Delivery", status: "completed" },
        { name: "Due Diligence", status: "in-progress" },
        { name: "Negotiation", status: "pending" },
        { name: "Deal Closed", status: "pending" }
      ]
    },
    {
      stage: "Negotiation",
      lastActivity: "Term sheet discussion",
      status: "On Track",
      milestones: [
        { name: "Initial Contact", status: "completed" },
        { name: "Asset Delivery", status: "completed" },
        { name: "Due Diligence", status: "completed" },
        { name: "Negotiation", status: "in-progress" },
        { name: "Deal Closed", status: "pending" }
      ]
    },
    {
      stage: "Deal Closed",
      lastActivity: "Transaction completed",
      status: "On Track",
      milestones: [
        { name: "Initial Contact", status: "completed" },
        { name: "Asset Delivery", status: "completed" },
        { name: "Due Diligence", status: "completed" },
        { name: "Negotiation", status: "completed" },
        { name: "Deal Closed", status: "completed" }
      ]
    }
  ];
}