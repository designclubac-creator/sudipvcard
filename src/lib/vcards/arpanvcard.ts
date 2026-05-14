export interface ProfileData {
  firstName: string;
  lastName: string;
  prefix?: string;
  displayName?: string;
  organization?: string;
  title?: string;
  phone?: string;
  email?: string;
  url?: string;
  address?: {
    street?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
  note?: string;
}

export function generateVCard(profile: ProfileData): string {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${profile.lastName};${profile.firstName};;${profile.prefix ?? ''};`,
    `FN:${profile.displayName ?? `${profile.firstName} ${profile.lastName}`}`,
  ];

  if (profile.organization) {
    lines.push(`ORG:${profile.organization}`);
  }

  if (profile.title) {
    lines.push(`TITLE:${profile.title}`);
  }

  if (profile.phone) {
    lines.push(`TEL;TYPE=CELL,VOICE:${profile.phone}`);
  }

  if (profile.email) {
    lines.push(`EMAIL;TYPE=PREF,INTERNET:${profile.email}`);
  }

  if (profile.url) {
    lines.push(`URL:${profile.url}`);
  }

  if (profile.address) {
    const { street = '', city = '', region = '', postalCode = '', country = '' } = profile.address;
    lines.push(`ADR;TYPE=WORK,POSTAL,PARCEL:;;${street};${city};${region};${postalCode};${country}`);
  }

  if (profile.note) {
    lines.push(`NOTE:${profile.note}`);
  }

  lines.push('END:VCARD');

  return lines.join('\r\n');
}

export function downloadVCard(profile: ProfileData) {
  const vcard = generateVCard(profile);
  const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${profile.firstName}_${profile.lastName}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
