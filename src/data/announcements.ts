import type { Announcement } from '@/types';

/**
 * NEWS & ANNOUNCEMENTS
 * --------------------
 * To publish a new announcement, copy one block below, paste it at the top of the list,
 * give it a unique `slug` and edit the fields. Newest dates are shown first automatically.
 *
 * - `thumbnail` is optional. Put the image in /public/images/news/ and write "./images/news/my-image.jpg".
 *   Without a thumbnail a branded Kings tile is shown.
 * - `title`, `summary` and `content` can be a plain string (same in every language)
 *   or { en: '...', fr: '...', ar: '...' } (English is the fallback).
 * - In `content`, "## Heading" makes a sub-heading and lines starting with "- " make bullet points.
 * - Delete `placeholder: true` as soon as the text is real. While it is there, a "Sample" tag is displayed.
 */
export const announcements: Announcement[] = [
  {
    slug: 'welcome-to-kings-esports',
    title: {
      en: 'Welcome to the official Kings Esports website',
      fr: 'Bienvenue sur le site officiel de Kings Esports',
      ar: 'مرحباً بكم في الموقع الرسمي لكينغز للرياضات الإلكترونية',
    },
    date: '2026-11-01',
    category: 'organization',
    summary: {
      en: 'Kings Esports now has an official home online. Here is what you will find here and how to stay in the loop.',
      fr: 'Kings Esports dispose désormais d’un site officiel. Voici ce que vous y trouverez et comment rester informé.',
      ar: 'أصبح لكينغز للرياضات الإلكترونية موقع رسمي على الإنترنت. إليكم ما ستجدونه هنا وكيف تبقون على اطلاع.',
    },
    content: {
      en: [
        'Kings Esports was founded in 2026, and this website is our official home online. It is where we will share announcements, publish tournament details, introduce our roster and explain what we are building.',
        '## What you will find here',
        '- News and announcements from the organization',
        '- Tournament information, rules and registration links',
        '- Our competitive roster, academy and staff',
        '- Information for brands and organizations interested in partnering with us',
        '## Stay in the loop',
        'The fastest way to follow Kings is through our Discord server, where announcements and tournament sign-ups are shared first. You can also follow us on our social channels, linked in the footer of this page.',
      ],
      fr: [
        'Kings Esports a été fondé en 2026 et ce site est notre vitrine officielle. C’est ici que nous partagerons nos annonces, publierons les détails des tournois, présenterons notre roster et expliquerons ce que nous construisons.',
        '## Ce que vous trouverez ici',
        '- Les actualités et annonces de l’organisation',
        '- Les informations sur les tournois, les règles et les liens d’inscription',
        '- Notre roster compétitif, notre académie et notre staff',
        '- Des informations pour les marques et organisations souhaitant s’associer à nous',
        '## Restez informés',
        'Le moyen le plus rapide de suivre Kings est notre serveur Discord, où annonces et inscriptions aux tournois sont partagées en premier. Vous pouvez aussi nous suivre sur nos réseaux sociaux, liés en bas de page.',
      ],
      ar: [
        'تأسست كينغز للرياضات الإلكترونية في عام 2026، وهذا الموقع هو بيتنا الرسمي على الإنترنت. هنا سنشارك الإعلانات وننشر تفاصيل البطولات ونعرّف بفريقنا ونشرح ما نبنيه.',
        '## ماذا ستجدون هنا',
        '- أخبار وإعلانات المنظمة',
        '- معلومات البطولات والقواعد وروابط التسجيل',
        '- فريقنا التنافسي والأكاديمية والطاقم',
        '- معلومات للعلامات التجارية والمنظمات المهتمة بالشراكة معنا',
        '## ابقوا على اطلاع',
        'أسرع طريقة لمتابعة كينغز هي خادم ديسكورد الخاص بنا، حيث تُنشر الإعلانات والتسجيل في البطولات أولاً. يمكنكم أيضاً متابعتنا عبر قنواتنا الاجتماعية الموضحة أسفل هذه الصفحة.',
      ],
    },
    placeholder: true,
  },
  {
    slug: 'how-announcements-work',
    title: {
      en: 'Tournament and roster news will appear here',
      fr: 'Les actualités de tournois et du roster apparaîtront ici',
      ar: 'ستظهر هنا أخبار البطولات والفريق',
    },
    date: '2026-10-30',
    category: 'community',
    summary: {
      en: 'A sample announcement showing how news cards look. Replace it with real updates from Kings.',
      fr: 'Une annonce d’exemple pour montrer l’aspect des cartes d’actualité. Remplacez-la par de vraies nouvelles de Kings.',
      ar: 'إعلان تجريبي يوضح شكل بطاقات الأخبار. استبدله بمستجدات حقيقية من كينغز.',
    },
    content: {
      en: [
        'This is a sample announcement. It exists so you can see how articles, categories and dates are displayed.',
        'To publish a real announcement, edit the file src/data/announcements.ts, add a new entry and remove the placeholder flag from this one.',
      ],
    },
    placeholder: true,
  },
];
