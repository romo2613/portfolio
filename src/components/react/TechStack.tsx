import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandPhp,
  IconBrandLaravel,
  IconCoffee,
  IconBrandAuth0,
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconPalette,
  IconBrandAstro,
  IconBrandBootstrap,
  IconBrandMysql,
  IconBrandUbuntu,
  IconBrandAws,
  IconBrandCloudflare,
  IconServer,
  IconDashboard,
  IconBrandDocker,
  IconApi,
  IconBrandVscode,
  IconBrandLivewire,
  IconPackage,
  IconBrandGit,
  IconBrandBitbucket,
  IconBrandTrello,
  IconBrandMonday
} from '@tabler/icons-react';

export default function TechStack() {

  let badgeColors = [
    'badge-info',
    'badge-success',
    'badge-warning',
    'badge-error'
  ]

  let badgeColorsCopy = [...badgeColors];

  interface TechStack {
    name: string
    icon: JSX.Element
  }

  const techStacks: TechStack[] = [
    {
      name: 'JavaScript',
      icon: <IconBrandJavascript />
    },
    {
      name: 'TypeScript',
      icon: <IconBrandTypescript />
    },
    {
      name: 'React.JS',
      icon: <IconBrandReact />
    },
    {
      name: 'Next.JS',
      icon: <IconBrandNextjs />
    },
    {
      name: 'Astro Framework',
      icon: <IconBrandAstro />
    },
    {
      name: 'Next Auth',
      icon: <IconBrandAuth0 />
    },
    {
      name: 'JWT',
      icon: <IconBrandAuth0 />
    },
    {
      name: 'PNPM',
      icon: <IconPackage />
    },
    {
      name: 'PHP',
      icon: <IconBrandPhp />
    },
    {
      name: 'Laravel',
      icon: <IconBrandLaravel />
    },
    {
      name: 'Laravel Livewire',
      icon: <IconBrandLivewire />
    },
    {
      name: 'API',
      icon: <IconApi />
    },
    {
      name: 'Java',
      icon: <IconCoffee />
    },
    {
      name: 'HTML',
      icon: <IconBrandHtml5 />
    },
    {
      name: 'CSS',
      icon: <IconBrandCss3 />
    },
    {
      name: 'TailwindCSS',
      icon: <IconBrandTailwind />
    },
    {
      name: 'Shadcn/UI',
      icon: <IconPalette />
    },
    {
      name: 'Daisy/UI',
      icon: <IconPalette />
    },
    {
      name: 'BootStrap',
      icon: <IconBrandBootstrap />
    },
    {
      name: 'MySQL',
      icon: <IconBrandMysql />
    },
    {
      name: 'Ubuntu Server',
      icon: <IconBrandUbuntu />
    },
    {
      name: 'AWS',
      icon: <IconBrandAws />
    },
    {
      name: 'CloudFlare',
      icon: <IconBrandCloudflare />
    },
    {
      name: 'NGINX',
      icon: <IconServer />
    },
    {
      name: 'aaPanel',
      icon: <IconDashboard />
    },
    {
      name: 'Devilbox Docker',
      icon: <IconBrandDocker />
    },
    {
      name: 'Postman',
      icon: <svg className='neutral-content fill-current' height="25" width="25" viewBox="0 0 24 24" id="postman"><path d="M12.023,24.001c-0.515,0-1.032-0.033-1.551-0.1C3.911,23.059-0.743,17.035,0.099,10.473c0.408-3.179,2.029-6.008,4.566-7.968c2.537-1.959,5.685-2.813,8.863-2.406c0,0,0,0,0,0c3.179,0.408,6.009,2.03,7.968,4.566c1.959,2.536,2.813,5.684,2.405,8.862c-0.407,3.179-2.028,6.008-4.564,7.968C17.213,23.135,14.663,24.001,12.023,24.001z M11.98,1.5c-2.31,0-4.541,0.757-6.398,2.192c-2.22,1.714-3.638,4.19-3.995,6.972c-0.737,5.741,3.335,11.013,9.077,11.749c2.78,0.359,5.537-0.391,7.756-2.105c2.22-1.714,3.638-4.19,3.994-6.971c0.357-2.782-0.39-5.536-2.104-7.755c-1.714-2.22-4.19-3.639-6.973-3.995C12.883,1.528,12.43,1.5,11.98,1.5z"></path><path d="M8.152,19c-0.003,0-0.007,0-0.01,0l-1.897-0.017c-0.082-0.001-0.163-0.015-0.239-0.041c-0.242-0.049-0.455-0.17-0.612-0.352c-0.239-0.273-0.34-0.546-0.34-0.828c0-0.052,0.005-0.11,0.016-0.161l0.036-0.171c0.011-0.05,0.026-0.098,0.046-0.145c0.05-0.111,0.103-0.192,0.149-0.252c0.028-0.045,0.061-0.088,0.099-0.128l0.855-0.881c0.012-0.014,0.024-0.027,0.037-0.04l2.081-2.143c-0.103-0.071-0.194-0.162-0.263-0.276c-0.289-0.478-0.168-1.038,0.361-1.663c0.252-0.308,3.147-3.147,3.834-3.685c0.739-0.572,1.341-0.927,2.064-0.933l0,0c0.665,0.008,1.282,0.267,1.713,0.767c0.459,0.532,0.679,1.274,0.574,1.938c-0.156,0.98-0.738,1.813-1.288,2.499c-0.633,0.777-1.434,1.582-2.205,2.337c-0.038,0.037-0.076,0.068-0.111,0.094c-0.021,0.024-0.04,0.046-0.053,0.059c-1.158,1.049-2.279,1.854-3.599,2.581l-0.008,0.204c-0.001,0.027-0.004,0.055-0.008,0.082c-0.022,0.269-0.132,0.516-0.315,0.704l-0.101,0.104C8.757,18.873,8.458,19,8.152,19z M7.896,17.606c0,0-0.001,0.001-0.001,0.002L7.896,17.606z M6.921,17.489l0.983,0.009l0.018-0.429c0.012-0.267,0.164-0.508,0.401-0.632c1.353-0.71,2.47-1.488,3.613-2.518c0.062-0.081,0.145-0.161,0.229-0.213c0.726-0.711,1.47-1.461,2.039-2.161c0.602-0.749,0.894-1.286,0.974-1.79c0.03-0.192-0.039-0.503-0.229-0.724c-0.145-0.168-0.297-0.262-0.563-0.246c0,0,0,0-0.001,0c-0.261,0.002-0.585,0.175-1.156,0.616c-0.496,0.389-2.377,2.22-3.206,3.051c0.326-0.024,0.634,0.157,0.758,0.463c0.133,0.325,0.023,0.699-0.266,0.9c-0.011,0.008-0.088,0.064-0.167,0.146l-2.986,3.075l-0.003-0.003L6.921,17.489z M14.378,8.036h0.01H14.378z"></path><path d="M17.315,8.786c-1.175,0-2.131-0.962-2.131-2.144S16.14,4.5,17.315,4.5s2.131,0.961,2.131,2.143S18.49,8.786,17.315,8.786z M17.315,6c-0.348,0-0.631,0.288-0.631,0.643s0.283,0.644,0.631,0.644s0.631-0.289,0.631-0.644S17.663,6,17.315,6z"></path><path d="M10.085,13.95c-0.355,0-0.671-0.254-0.737-0.616c-0.074-0.407,0.196-0.798,0.604-0.872l0.882-0.159l4.12-4.296c0.288-0.299,0.761-0.309,1.061-0.021c0.299,0.286,0.309,0.762,0.022,1.061l-4.288,4.471c-0.11,0.113-0.252,0.19-0.408,0.219l-1.121,0.203C10.175,13.946,10.13,13.95,10.085,13.95z"></path></svg>
    },
    {
      name: 'VSCode',
      icon: <IconBrandVscode />
    },
    {
      name: 'Git',
      icon: <IconBrandGit />
    },
    {
      name: 'Bitbucket',
      icon: <IconBrandBitbucket />
    },
    {
      name: 'Monday',
      icon: <IconBrandMonday />
    },
    {
      name: 'Trello',
      icon: <IconBrandTrello />
    }

  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
    {techStacks.map((techStack, index) => {
      if (badgeColorsCopy.length === 0) {
        badgeColorsCopy = [...badgeColors];
      }
      const randomIndex = Math.random() * badgeColorsCopy.length | 0;
      const randomBadgeColor = badgeColorsCopy[randomIndex];

      // Eliminar el color usado de la copia
      badgeColorsCopy.splice(randomIndex, 1);
      return (
        <div className="flex justify-start btn" key={index}>
          <div className='pr-3'>
            {techStack.icon}
          </div>
          <div className={`badge ${randomBadgeColor} text-xs`}>{techStack.name}</div>
        </div>
      )
    })}
  </div>
  )
}


