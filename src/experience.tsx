import './App.css';
import { Box, Grid, Typography, Container } from '@mui/material';

const workData = [
  {
    year: 'April 2021 - Present',
    position: 'Frontend Developer',
    company: 'BV Data Solutions, Kottayam',
    description: `• Building a web application using ReactJs, React Query, Material-UI and TailwindCSS.
      • Integrated RESTful APIs for efficient data fetching.
      •	Integrated Telerik reporting for dynamic report generation.
      •	Maintained high-quality code standards using Jest for testing.
      •	Collaborated with cross-functional teams to understand their requirements and optimize existing applications.
      •	Participated in Agile ceremonies, contributing to sprint planning and retrospectives. Ensured high-quality codes and maintained brand standards under the guidelines.
      `,
  },
  {
    year: 'October 2019 - April 2021',
    position: 'Full Stack Developer',
    company: 'Free Learn India Pvt Ltd., Thiruvananthapuram',
    description: `• Collaborated with cross-functional teams to design and implement scalable solutions using ReactJs, NodeJs.
        • Got a good opportunity to develop personal skills and knowledge in advanced development technologies.`,
  },
  {
    year: 'January 2018 - May 2019',
    position: 'Software Developer',
    company: 'Andria Systems Pvt Ltd., Thiruvananthapuram',
    description: `• Developed on ASP.NET Web applications and MVC.
• Worked with VS2010/VS2012 .NET Framework 4.0/4.5, Asp.net, C# Net and MVC Web Application.
• Used browser for checking developing pages for debugging the application ( Google Chrome, IE and Firebug of Firefox browser).
• Used Object oriented programming methodologies.`
  },
  {
    year: 'July 2017 - January 2018',
    position: 'Associate Programmer',
    company: 'Cerps technologies Pvt Ltd., Thiruvananthapuram',
    description: `• Developed and maintained web based applications written in traditional ASP.net and MVC4.
• Developed client side website ( both back-end and front-end).
• Assisted project managers by developing web applications.`
  },
  {
    year: 'Januray 2017 - July 2017',
    position: 'Trainee Software Developer',
    company: 'Quest Innovative Solutions., Thiruvananthapuram',
    description: `•	Followed best software development practices.
• Gained practical working knowledge of .NET Technologies & MsSql.
• Assisted project managers by developing web applications.`
  },
];

export const Experience = () => {
  return (
    <Box sx={{ color: 'text.primary', paddingY: 8 }}>
      <Container>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold' }}
        >
          Work Experiences
        </Typography>

        <Container>

          <Grid container spacing={4} sx={{ paddingTop: 4 }}>
            {workData.map((item) => {
              return (<>
                <Grid size={{ xs: 12, md: 3 }}>
                  <Typography color="gray">{item.year}</Typography>
                </Grid>
                <Grid size={{ xs: 12, md: 9 }}>
                  <Typography variant="h6" fontWeight="bold">
                    {item.position} – <Box component="span" fontWeight="medium">{item.company}</Box>
                  </Typography>

                  <Typography variant="body1" sx={{ mt: 1, color: '#ccc' }}>
                    {item.description.split('\n').map((line, idx) => (
                      <span key={idx}>
                        {line}
                        <br />
                      </span>
                    ))}

                  </Typography>
                </Grid></>)
            })}

          </Grid>
        </Container>
      </Container>
    </Box>




  );
}

