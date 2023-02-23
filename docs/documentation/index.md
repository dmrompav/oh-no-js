<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/67114366?v=4',
    name: 'Dmitrii Pavlov',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/dmrompav' },
    ]
  }
]
</script>

# Documentation

:::warning
  This module's development still in process.  
  You may create a PR in the repo, if you are interested in [**"Oh no! JS!"**](https://github.com/dmrompav/oh-no-js)
:::

- [Objects](/documentation/objects)
- [Arrays](/documentation/arrays)
- [Date](/documentation/date)

### Sincerely,

<VPTeamMembers size="small" :members="members" />
