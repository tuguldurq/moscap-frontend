import {BiClinic, BiMobileAlt, BiRestaurant} from 'react-icons/bi';
import {BsTv} from 'react-icons/bs';
import {DiCoffeescript} from 'react-icons/di';
import {FaClinicMedical, FaMicrophoneAlt, FaUniversity} from 'react-icons/fa';
import {HiShoppingBag} from 'react-icons/hi';
import {IoAirplaneOutline} from 'react-icons/io5';
import {
  MdFitnessCenter,
  MdHotel,
  MdOutlineEvent,
  MdTheaterComedy,
} from 'react-icons/md';
import Icon from '@mdi/react';
import {
  mdiFerrisWheel,
  mdiMicrophoneVariant,
  mdiOfficeBuildingMarker,
  mdiMovieOpen,
} from '@mdi/js';
import {getCustomDateTime} from '../../../utility/Utils';

const academyData = {
  academicStats: [
    {
      id: 1,
      title: 'Караоке',
      count: '350',
      new: 'New $50',
      badgeColor: '#434343',
      bgcolor: '#ebebee',
      icon: (
        <Icon
          path={mdiMicrophoneVariant}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 2,
      title: 'Show, Concert, Theatre',
      count: '1500',
      new: 'New 125',
      badgeColor: '#0A8FDC',
      bgcolor: '#ebebee',
      icon: (
        <MdTheaterComedy
          size={36}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 3,
      title: 'Event Organizer',
      count: '130',
      new: 'New 5',
      badgeColor: '#F44D50',
      bgcolor: '#ebebee',
      icon: (
        <MdOutlineEvent
          size={36}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 4,
      title: 'Event Hall',
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <Icon
          path={mdiOfficeBuildingMarker}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 5,
      title: (
        <span>
          Film, Video studio, <br /> Advertising Agency
        </span>
      ),
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <Icon
          path={mdiMovieOpen}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 6,
      title: 'FM',
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <FaMicrophoneAlt
          size={36}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 7,
      title: 'Television, Cable, IPTV',
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: <BsTv size={36} color='#0A8FDC' className='metrics-stats-avatar' />,
    },
    {
      id: 8,
      title: (
        <span>
          Restaurant, Lounge, Pub, <br />
          Night club
        </span>
      ),
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <BiRestaurant
          size={36}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 9,
      title: 'Hotel, Wellness Resort',
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <MdHotel size={36} color='#0A8FDC' className='metrics-stats-avatar' />
      ),
    },
    {
      id: 10,
      title: (
        <span>
          Education <br />
          <span style={{fontSize: 16}}>
            (Kindergarten, Elementary, University)
          </span>
        </span>
      ),
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <FaUniversity
          size={36}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 11,
      title: 'Coffee shop',
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <DiCoffeescript
          size={36}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 12,
      title: 'Mall, Stores, Supermarket, Convenience Store',
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <HiShoppingBag
          size={36}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 13,
      title: 'Fitness center, Aerobic',
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <MdFitnessCenter
          size={36}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 14,
      title: 'Beauty salon, Clinic',
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <BiClinic size={36} color='#0A8FDC' className='metrics-stats-avatar' />
      ),
    },
    {
      id: 15,
      title: 'Airline',
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <IoAirplaneOutline
          size={36}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 16,
      title: 'Web site, Mobile App',
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <BiMobileAlt
          size={36}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 17,
      title: 'Healthcare, Facility',
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <FaClinicMedical
          size={36}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
    {
      id: 18,
      title: 'Хүүхдийн парк',
      count: '2650',
      new: 'New 245',
      badgeColor: '#49BD65',
      bgcolor: '#ebebee',
      icon: (
        <Icon
          path={mdiFerrisWheel}
          color='#0A8FDC'
          className='metrics-stats-avatar'
        />
      ),
    },
  ],
  courseCategories: [
    {
      id: 1,
      title: 'Design',
      desc: 'This is a extensive course for learning',
      lessons: 14,
      xp: 45,
      images: [
        {
          image: '/assets/images/dashboard/academy/design.png',
          title: 'image 1',
        },
        {
          image: '/assets/images/dashboard/academy/design.png',
          title: 'image 2',
        },
        {
          image: '/assets/images/dashboard/academy/design.png',
          title: 'image 3',
        },
      ],
    },
    {
      id: 2,
      title: 'Development',
      desc: 'This is a extensive course for learning',
      lessons: 14,
      xp: 45,
      images: [
        {
          image: '/assets/images/dashboard/academy/development.png',
          title: 'image 1',
        },
        {
          image: '/assets/images/dashboard/academy/development.png',
          title: 'image 2',
        },
        {
          image: '/assets/images/dashboard/academy/development.png',
          title: 'image 3',
        },
      ],
    },
    {
      id: 3,
      title: 'Marketing',
      desc: 'This is a extensive course for learning',
      lessons: 14,
      xp: 45,
      images: [
        {
          image: '/assets/images/dashboard/academy/marketing.png',
          title: 'image 1',
        },
        {
          image: '/assets/images/dashboard/academy/marketing.png',
          title: 'image 2',
        },
        {
          image: '/assets/images/dashboard/academy/marketing.png',
          title: 'image 3',
        },
      ],
    },
    {
      id: 4,
      title: 'IT and Software',
      desc: 'This is a extensive course for learning',
      lessons: 14,
      xp: 45,
      images: [
        {
          image: '/assets/images/dashboard/academy/it.png',
          title: 'image 1',
        },
        {
          image: '/assets/images/dashboard/academy/it.png',
          title: 'image 2',
        },
        {
          image: '/assets/images/dashboard/academy/it.png',
          title: 'image 3',
        },
      ],
    },
  ],
  profile: {
    id: 1,
    profile_pic: '/assets/images/avatar/A1.jpg',
    name: 'Donald O Donhue',
    designation: 'Student',
    achievements: 2300,
    friends: 38,
  },
  courses: {
    categories: [
      {id: 1, title: 'All courses', slug: 'all'},
      {id: 2, title: 'Current', slug: 'current'},
      {id: 3, title: 'Archived', slug: 'archived'},
      {id: 4, title: 'Upcoming', slug: 'upcoming'},
      {id: 5, title: 'Watchlist', slug: 'watchlist'},
    ],
    courses: [
      {
        id: 1,
        title: 'UI & UX Designing',
        duration: '4 Feb 2020 - 22 Feb 2020',
        rating: 8.7,
        isCompleted: false,
        thumb: '/assets/images/dashboard/academy/ui.png',
      },
      {
        id: 2,
        title: 'Logo Design (Part 1)',
        duration: '4 Mar 2020 - 22 Mar 2020',
        rating: 8.7,
        isCompleted: false,
        thumb: '/assets/images/dashboard/academy/logoDsign.png',
      },
      {
        id: 3,
        title: 'Digital Marketing',
        duration: '4 Apr 2020 - 22 Apr 2020',
        rating: 8.7,
        isCompleted: true,
        thumb: '/assets/images/dashboard/academy/digitalMarketing.png',
      },
      {
        id: 4,
        title: 'Web Development',
        duration: '4 May 2020 - 22 May 2020',
        rating: 8.7,
        isCompleted: false,
        thumb: '/assets/images/dashboard/academy/webDevelopment.png',
      },
    ],
  },
  notifications: [
    {
      id: 1,
      bgcolor: '#FEF1E4',
      color: '#F88333',
      letter: 'B',
      content: 'You had 1 class on 28 August',
      date: getCustomDateTime(-5, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 2,
      bgcolor: '#DDEFFA',
      color: '#0A8FDC',
      letter: 'A',
      content: 'Mighel sent you a message',
      date: getCustomDateTime(-10, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 3,
      bgcolor: '#FFE3EE',
      color: '#FE8EB9',
      letter: 'G',
      content: 'You have taken AI class',
      date: getCustomDateTime(-15, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 4,
      bgcolor: '#E2F3E8',
      color: '#47B46B',
      letter: 'W',
      content: 'You have registered for Python',
      date: getCustomDateTime(-25, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
    {
      id: 5,
      bgcolor: '#FEE7E6',
      color: '#FCA7A4',
      letter: 'J',
      content: 'Nancy sent you a message',
      date: getCustomDateTime(-50, 'minutes', 'MMMM DD, YYYY, h:mm:ss a'),
    },
  ],
  courseDetails: [
    {
      id: 1,
      title: 'UI & UX Designing',
      thumb: '/assets/images/dashboard/academy/ui.png',
      level: 'Advance level',
      coveredDuration: '35 hours',
      totalDuration: '75 hours',
      coveredPractice: '12 hours',
      totalPractice: '40 hours',
      graphData: [
        {month: 'Jan', duration: 1500},
        {month: '', duration: 400},
        {month: 'Feb', duration: 2000},
        {month: 'Mar', duration: 1200},
        {month: 'Apr', duration: 2200},
        {month: 'May', duration: 2600},
        {month: 'Jun', duration: 4300},
        {month: 'July', duration: 2900},
        {month: 'Aug', duration: 3800},
        {month: 'Sep', duration: 1500},
      ],
    },
    {
      id: 2,
      title: 'Logo Design',
      thumb: '/assets/images/dashboard/academy/logoDsign.png',
      level: 'Elementary level',
      coveredDuration: '35 hours',
      totalDuration: '75 hours',
      coveredPractice: '12 hours',
      totalPractice: '40 hours',
      graphData: [
        {month: 'Jan', duration: 1500},
        {month: '', duration: 400},
        {month: 'Feb', duration: 2000},
        {month: 'Mar', duration: 1200},
        {month: 'Apr', duration: 2200},
        {month: 'May', duration: 2600},
        {month: 'Jun', duration: 4300},
        {month: 'July', duration: 2900},
        {month: 'Aug', duration: 3800},
        {month: 'Sep', duration: 1500},
      ],
    },
    {
      id: 3,
      title: 'Typography',
      thumb: '/assets/images/dashboard/academy/digitalMarketing.png',
      level: 'Elementary level',
      coveredDuration: '35 hours',
      totalDuration: '75 hours',
      coveredPractice: '12 hours',
      totalPractice: '40 hours',
      graphData: [
        {month: 'Jan', duration: 1500},
        {month: '', duration: 400},
        {month: 'Feb', duration: 2000},
        {month: 'Mar', duration: 1200},
        {month: 'Apr', duration: 2200},
        {month: 'May', duration: 2600},
        {month: 'Jun', duration: 4300},
        {month: 'July', duration: 2900},
        {month: 'Aug', duration: 3800},
        {month: 'Sep', duration: 1500},
      ],
    },
  ],
  learningData: [
    {
      id: 1,
      icon: '/assets/images/dashboard/academy/learning1.svg',
      title: 'Target Audience Learning',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      percentage: 57,
    },
    {
      id: 2,
      icon: '/assets/images/dashboard/academy/learning2.svg',
      title: 'The Complete Web',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      percentage: 43,
    },
    {
      id: 3,
      icon: '/assets/images/dashboard/academy/learning3.svg',
      title: 'Grow your community',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      percentage: 77,
    },
    {
      id: 4,
      icon: '/assets/images/dashboard/academy/learning1.svg',
      title: 'Target Audience Learning',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      percentage: 57,
    },
  ],
  latestResults: [
    {id: 1, chapter: 'Unit 5', topic: 'Technology', percentage: 25},
    {id: 12, chapter: 'Unit 12', topic: 'IT & Service', percentage: 44},
    {id: 9, chapter: 'Unit 9', topic: 'Ecology', percentage: 40},
    {id: 8, chapter: 'Unit 8', topic: 'Real Estate', percentage: 15},
    {id: 16, chapter: 'Unit 16', topic: 'Education', percentage: 76},
    {id: 4, chapter: 'Unit 4', topic: 'Job Market', percentage: 25},
    {id: 7, chapter: 'Unit 7', topic: 'Education', percentage: 15},
    {id: 11, chapter: 'Unit 11', topic: 'Technology', percentage: 76},
  ],
  classData: [
    {
      id: 1,
      name: 'Adobe XD - propTypes',
      percent: 96,
      icon: '/assets/images/dashboard/academy/class.svg',
    },
    {
      id: 2,
      name: 'Designing - propTypes',
      percent: 34,
      icon: '/assets/images/dashboard/academy/class.svg',
    },
    {
      id: 3,
      name: 'Development - propTypes',
      percent: 65,
      icon: '/assets/images/dashboard/academy/class.svg',
    },
    {
      id: 4,
      name: 'Python - propTypes',
      percent: 23,
      icon: '/assets/images/dashboard/academy/class.svg',
    },
    {
      id: 5,
      name: 'Project',
      percent: 87,
      icon: '/assets/images/dashboard/academy/class.svg',
    },
  ],
  studentRankings: [
    {
      id: 1,
      name: {
        title: 'Suzanna J. Fowler',
        profile_pic: '/assets/images/avatar/A1.jpg',
      },
      courseId: 34878234,
      courseName: 'Watercolor Class',
      totalGrade: 97.4,
      ranking: 1,
      category: 'Design',
    },
    {
      id: 2,
      name: {
        title: 'Julie Taylor',
        profile_pic: '/assets/images/avatar/A2.jpg',
      },
      courseId: 345453444,
      courseName: 'Python Class',
      totalGrade: 91.4,
      ranking: 2,
      category: 'Development',
    },
    {
      id: 3,
      name: {
        title: 'John Doe',
        profile_pic: '/assets/images/avatar/A3.jpg',
      },
      courseId: 455644556,
      courseName: 'JS Class',
      totalGrade: 98.4,
      ranking: 3,
      category: 'Development',
    },
    {
      id: 4,
      name: {
        title: 'Angelina Joew',
        profile_pic: '/assets/images/avatar/A5.jpg',
      },
      courseId: 455644556,
      courseName: 'React Class',
      totalGrade: 95.3,
      ranking: 4,
      category: 'Full Stack',
    },
  ],
  grades: [
    {month: '', grades: 0},
    {month: 'Jan', grades: 20},
    {month: 'Feb', grades: 28},
    {month: 'Mar', grades: 76},
    {month: 'Apr', grades: 38},
    {month: 'May', grades: 64},
    {month: 'Jun', grades: 76},
    {month: 'Jul', grades: 20},
    {month: '', grades: 35},
  ],
  relatedCourses: [
    {
      id: 1,
      image: '/assets/images/dashboard/academy/relatedCourse1.svg',
      title: 'How to attract client 1st time',
      author: 'Patya pindo',
      views: '1.5k',
    },
    {
      id: 2,
      image: '/assets/images/dashboard/academy/relatedCourse2.png',
      title: 'How to secure good marks',
      author: 'Patya pindo',
      views: '1.8k',
    },
    {
      id: 3,
      image: '/assets/images/dashboard/academy/relatedCourse1.svg',
      title: 'How to attract client 1st time',
      author: 'Patya pindo',
      views: '1.5k',
    },
    {
      id: 4,
      image: '/assets/images/dashboard/academy/relatedCourse2.png',
      title: 'How to secure good marks',
      author: 'Patya pindo',
      views: '1.8k',
    },
  ],
  videoPromo: {
    title: 'Creating beautiful landing page in 1 hour',
    owner: 'Geo Vanni',
    category: 'Interface Experience',
    assignments: [
      {
        id: 1,
        title: 'Collecting Moodboard from dribble.com',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        students: 32,
        daysLeft: 1,
      },
      {
        id: 2,
        title: 'Creating beautiful landing page',
        desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        students: 12,
        daysLeft: 2,
      },
    ],
  },
};
export default academyData;
