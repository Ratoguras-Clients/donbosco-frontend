import type { OrgNotice } from "@/lib/types";

export const sisterOrgNotices: OrgNotice[] = [
  // ── FNCCI Notices ──
  {
    id: "fncci-n1",
    organizationId: 1,
    title: "FNCCI Annual General Assembly - March 25, 2025",
    summary:
      "All member chambers and associations are invited to participate in the Annual General Assembly.",
    content:
      "The Federation of Nepalese Chambers of Commerce and Industry cordially invites all member organizations to the Annual General Assembly scheduled for March 25, 2025, at 2:00 PM at the FNCCI Conference Hall, Teku, Kathmandu.\n\nAgenda:\n1. Approval of minutes from previous AGM\n2. Presentation of annual financial report FY 2023-24\n3. Annual activity report presentation\n4. Election of new Executive Committee members for term 2025-2027\n5. Discussion and approval of strategic priorities for 2025-26\n6. Any other business\n\nAll member chambers and associations are requested to confirm their participation by March 20, 2025. Proxy forms are available at the FNCCI Secretariat.",
    date: "February 22, 2025",
    isNew: true,
    slug: "fncci-annual-general-assembly",
  },
  {
    id: "fncci-n2",
    organizationId: 1,
    title: "Updated Membership Fee Structure - Effective April 1, 2025",
    summary: "Revised membership fees approved by the Executive Committee.",
    content:
      "The FNCCI Executive Committee has approved a revised membership fee structure effective from April 1, 2025. The new fee structure has been designed to ensure sustainability while remaining affordable for members of all sizes.\n\nNew Annual Membership Fees:\n- Micro Enterprises: NPR 5,000\n- Small Enterprises: NPR 15,000\n- Medium Enterprises: NPR 35,000\n- Large Enterprises: NPR 75,000\n\nThe revised fees include access to all FNCCI services, events, and training programs. Members are requested to update their payment information at the earliest.",
    date: "February 18, 2025",
    isNew: true,
    slug: "updated-membership-fee-structure",
  },
  {
    id: "fncci-n3",
    organizationId: 1,
    title: "Call for Nominations: FNCCI Excellence Awards 2025",
    summary:
      "Submit nominations for outstanding businesses and entrepreneurs by March 15.",
    content:
      "FNCCI invites nominations for the annual Excellence Awards recognizing outstanding contributions to Nepal's industrial and commercial development. Award categories include:\n\n- Business Leader of the Year\n- Export Excellence Award\n- Innovation Award\n- Social Responsibility Award\n- Young Entrepreneur Award\n\nNomination forms are available on the FNCCI website. Deadline for submissions is March 15, 2025. Winners will be announced at the Annual Business Gala on April 20, 2025.",
    date: "February 10, 2025",
    slug: "fncci-excellence-awards-nominations",
  },

  // ── Nepal Chamber Notices ──
  {
    id: "ncc-n1",
    organizationId: 2,
    title: "Nepal Chamber Executive Committee Elections - April 10, 2025",
    summary:
      "Nominations open for Executive Committee positions for term 2025-2027.",
    content:
      "The Nepal Chamber of Commerce announces elections for the Executive Committee for the term 2025-2027. Positions available:\n\n- President\n- Senior Vice President\n- Vice President\n- Secretary\n- Treasurer\n- 15 Executive Members\n\nEligible members can submit nominations from February 25 to March 25, 2025. Election will be held on April 10, 2025, at the Chamber premises. All members in good standing are encouraged to participate.",
    date: "February 20, 2025",
    isNew: true,
    slug: "executive-committee-elections",
  },
  {
    id: "ncc-n2",
    organizationId: 2,
    title: "Office Closed for Annual Maintenance - March 5-7",
    summary: "Nepal Chamber office will be closed for system upgrades.",
    content:
      "Please note that the Nepal Chamber office will be closed from March 5-7, 2025, for annual maintenance and IT system upgrades. During this period, services including certification, member verification, and office consultations will not be available.\n\nFor urgent matters, members can contact us via email at info@nepalchamber.org. Regular operations will resume on March 8, 2025.",
    date: "February 15, 2025",
    slug: "office-maintenance-closure",
  },
  {
    id: "ncc-n3",
    organizationId: 2,
    title: "New Trade Documentation Guidelines",
    summary:
      "Updated procedures for certificate of origin and export documentation.",
    content:
      "Nepal Chamber has updated its trade documentation guidelines in line with recent government regulations. Key changes:\n\n- Online application system now mandatory for all certificates\n- Processing time reduced to 24 hours for digital applications\n- New document verification system for export shipments\n- Updated fee structure for trade documents\n\nMembers are advised to familiarize themselves with the new procedures. Training sessions will be conducted on March 1 and March 15, 2025.",
    date: "February 8, 2025",
    slug: "trade-documentation-guidelines",
  },

  // ── NBA Notices ──
  {
    id: "nba-n1",
    organizationId: 3,
    title: "Mandatory Cybersecurity Training for All Bank Staff",
    summary:
      "NBA mandates completion of cybersecurity certification by April 30.",
    content:
      "In response to increasing cyber threats, NBA requires all member banks to ensure their staff complete mandatory cybersecurity awareness training by April 30, 2025.\n\nTraining Requirements:\n- All customer-facing staff must complete Level 1 certification\n- IT and security staff must complete Level 2 certification\n- Training modules available on NBA Learning Portal\n- Compliance reports due May 15, 2025\n\nNBA will provide subsidized training resources and conduct verification audits. Non-compliance may result in penalties as per NBA regulations.",
    date: "February 18, 2025",
    isNew: true,
    slug: "cybersecurity-training-mandate",
  },
  {
    id: "nba-n2",
    organizationId: 3,
    title: "Updated KYC Norms for Banking Sector",
    summary: "New customer identification requirements effective March 1.",
    content:
      "Nepal Rastra Bank has issued updated Know Your Customer (KYC) norms, and NBA member banks must implement these changes by March 1, 2025.\n\nKey Updates:\n- Enhanced identity verification for high-value transactions\n- Biometric authentication for account opening\n- Periodic KYC updates for existing customers\n- Digital verification options for online accounts\n\nNBA has prepared implementation guidelines and will conduct training workshops for member banks on February 25, 2025.",
    date: "February 12, 2025",
    slug: "updated-kyc-norms",
  },
  {
    id: "nba-n3",
    organizationId: 3,
    title: "NBA Annual Banking Conference - May 15-16, 2025",
    summary:
      "Registration now open for Nepal's premier banking industry event.",
    content:
      "Nepal Bankers Association invites all member banks to participate in the Annual Banking Conference scheduled for May 15-16, 2025, at Hotel Soaltee, Kathmandu.\n\nConference Theme: 'Digital Banking: Opportunities and Challenges'\n\nTopics include digital transformation, fintech partnerships, cybersecurity, financial inclusion, and regulatory compliance. Registration deadline is April 30, 2025. Early bird discount available until March 31, 2025.",
    date: "February 5, 2025",
    slug: "annual-banking-conference",
  },

  // Add similar notices for HAN (id: 4), GAN (id: 5), and CAN (id: 6)
  // 3 notices each following the same pattern
];
