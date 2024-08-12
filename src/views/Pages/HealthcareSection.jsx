import React, { useState } from 'react';
import { Container, TextField, Typography, Grid, Card, CardContent, Divider, Box } from '@mui/material';

const topicsData = [
  {
    topic: 'Heart',
    tips: [
      'Exercise regularly to maintain a healthy heart.',
      'Avoid smoking to reduce the risk of heart disease.',
      'Eat a balanced diet low in saturated fats and high in fiber.',
      'Monitor your blood pressure and cholesterol levels regularly.',
      'Reduce stress through relaxation techniques like meditation.'
    ]
  },
  {
    topic: 'Eyes',
    tips: [
      'Take breaks from screens to avoid eye strain.',
      'Wear sunglasses to protect your eyes from UV rays.',
      'Eat foods rich in Vitamin A for better eye health.',
      'Get regular eye check-ups to monitor your vision.',
      'Use artificial tears if your eyes feel dry or irritated.'
    ]
  },
  {
    topic: 'Ears',
    tips: [
      'Avoid loud noises to protect your hearing.',
      'Keep your ears dry to prevent infections.',
      'Don’t use cotton swabs to clean the inside of your ears.',
      'Get your hearing checked regularly, especially as you age.',
      'Use earplugs in noisy environments to prevent damage.'
    ]
  },
  {
    topic: 'Hair',
    tips: [
      'Use a mild shampoo to keep your hair healthy.',
      'Avoid excessive heat styling to prevent damage.',
      'Include protein-rich foods in your diet for stronger hair.',
      'Trim your hair regularly to prevent split ends.',
      'Protect your hair from the sun by wearing a hat or using a UV protection spray.'
    ]
  },
  {
    topic: 'Skin',
    tips: [
      'Apply sunscreen to protect your skin from UV rays.',
      'Stay hydrated to keep your skin supple.',
      'Use a gentle cleanser to avoid irritation.',
      'Moisturize regularly to maintain skin elasticity.',
      'Get enough sleep to help your skin regenerate and repair.'
    ]
  },
  {
    topic: 'Nutrition',
    tips: [
      'Eat a balanced diet rich in fruits and vegetables.',
      'Stay hydrated by drinking plenty of water.',
      'Include a variety of protein sources in your diet.',
      'Limit your intake of processed and sugary foods.',
      'Eat regular meals and avoid skipping breakfast.'
    ]
  },
  {
    topic: 'Fitness',
    tips: [
      'Incorporate both cardio and strength training in your routine.',
      'Warm up before exercising and cool down afterwards.',
      'Stay consistent with your workouts to see long-term results.',
      'Listen to your body and avoid overtraining.',
      'Vary your workouts to keep them interesting and effective.'
    ]
  },
  {
    topic: 'Mental Health',
    tips: [
      'Practice mindfulness to reduce stress.',
      'Stay connected with loved ones for emotional support.',
      'Get regular exercise to boost your mood.',
      'Seek professional help if you’re feeling overwhelmed.',
      'Take time for hobbies and activities you enjoy.'
    ]
  },
  {
    topic: 'Immunity',
    tips: [
      'Get enough sleep to boost your immune system.',
      'Eat a balanced diet rich in vitamins and minerals.',
      'Stay physically active to support your immune function.',
      'Practice good hygiene to prevent infections.',
      'Manage stress through relaxation techniques like yoga.'
    ]
  },
  {
    topic: 'Respiratory Health',
    tips: [
      'Avoid smoking to keep your lungs healthy.',
      'Stay away from polluted areas and wear a mask if necessary.',
      'Keep your living area well-ventilated.',
      'Exercise regularly to improve lung function.',
      'Stay hydrated to keep your respiratory system functioning well.'
    ]
  },
  {
    topic: 'Digestive Health',
    tips: [
      'Include fiber in your diet for better digestion.',
      'Stay hydrated to help your digestive system function properly.',
      'Eat smaller, more frequent meals to avoid bloating.',
      'Avoid processed foods that can irritate the digestive system.',
      'Chew your food thoroughly to aid in digestion.'
    ]
  },
  {
    topic: 'Bone and Joint Health',
    tips: [
      'Stay active to maintain strong bones and joints.',
      'Include calcium and vitamin D in your diet.',
      'Maintain a healthy weight to reduce stress on joints.',
      'Avoid repetitive motions that can strain your joints.',
      'Get regular check-ups to monitor bone health, especially as you age.'
    ]
  },
  {
    topic: 'Sleep',
    tips: [
      'Maintain a regular sleep schedule for better rest.',
      'Create a relaxing bedtime routine to wind down.',
      'Avoid caffeine and heavy meals before bedtime.',
      'Keep your bedroom cool, dark, and quiet.',
      'Get regular exercise to improve sleep quality.'
    ]
  },
  {
    topic: 'Hydration',
    tips: [
      'Drink at least 8 glasses of water daily to stay hydrated.',
      'Start your day with a glass of water to kickstart hydration.',
      'Carry a water bottle with you to remind yourself to drink regularly.',
      'Eat water-rich foods like fruits and vegetables to supplement hydration.',
      'Limit sugary drinks and alcohol, which can dehydrate you.'
    ]
  },
  {
    topic: 'Dental Health',
    tips: [
      'Brush your teeth twice a day with fluoride toothpaste.',
      'Floss daily to remove plaque between teeth.',
      'Limit sugary foods and drinks to prevent tooth decay.',
      'Visit your dentist regularly for check-ups and cleanings.',
      'Replace your toothbrush every three months or sooner if bristles are frayed.'
    ]
  },
  {
    topic: 'Weight Management',
    tips: [
      'Eat balanced meals to maintain a healthy weight.',
      'Incorporate regular exercise into your routine.',
      'Monitor your portion sizes to avoid overeating.',
      'Stay consistent with your eating and exercise habits.',
      'Seek professional advice if you need help with weight management.'
    ]
  },
  {
    topic: 'Cholesterol',
    tips: [
      'Eat a diet low in saturated fats to manage cholesterol levels.',
      'Include more whole grains, fruits, and vegetables in your diet.',
      'Exercise regularly to help lower LDL cholesterol and raise HDL cholesterol.',
      'Avoid trans fats found in many processed and fried foods.',
      'Get your cholesterol levels checked regularly.'
    ]
  },
  {
    topic: 'Blood Pressure',
    tips: [
      'Reduce salt intake to help manage blood pressure.',
      'Stay physically active to keep your blood pressure in check.',
      'Limit alcohol consumption as it can raise blood pressure.',
      'Eat a diet rich in potassium, found in fruits and vegetables.',
      'Monitor your blood pressure regularly at home.'
    ]
  },
  {
    topic: 'Allergies',
    tips: [
      'Identify and avoid triggers that cause allergic reactions.',
      'Keep your living environment clean to reduce allergens.',
      'Use antihistamines or other medications as directed by a doctor.',
      'Wear a mask during allergy season to reduce exposure to pollen.',
      'Consider allergy testing if you have persistent symptoms.'
    ]
  },
  {
    topic: 'Vision',
    tips: [
      'Get regular eye exams to monitor vision health.',
      'Take breaks from screens to reduce eye strain.',
      'Wear protective eyewear during activities that could harm your eyes.',
      'Eat a diet rich in antioxidants and vitamins A and C.',
      'Practice good hygiene when using contact lenses.'
    ]
  },
  {
    topic: 'Hearing',
    tips: [
      'Protect your ears from loud noises by using earplugs.',
      'Keep your ears clean, but avoid inserting objects like cotton swabs.',
      'Get your hearing checked regularly, especially as you age.',
      'Limit exposure to loud music through headphones.',
      'Stay aware of any changes in your hearing and seek medical advice if needed.'
    ]
  },
  {
    topic: 'Diabetes Management',
    tips: [
      'Monitor your blood sugar levels regularly.',
      'Eat a balanced diet low in sugar and high in fiber.',
      'Stay physically active to help manage your diabetes.',
      'Take medications as prescribed by your doctor.',
      'Keep track of your A1C levels through regular check-ups.'
    ]
  },
  {
    topic: 'Pregnancy',
    tips: [
      'Attend regular prenatal appointments for proper monitoring.',
      'Eat a nutritious diet rich in folic acid, iron, and calcium.',
      'Stay hydrated and get plenty of rest.',
      'Avoid alcohol, smoking, and certain medications.',
      'Stay active with doctor-approved exercises.'
    ]
  },
  {
    topic: 'Posture',
    tips: [
      'Sit up straight and avoid slouching to maintain good posture.',
      'Use ergonomic furniture to support your posture at work.',
      'Take breaks to stretch if you sit for long periods.',
      'Wear supportive shoes to help maintain posture while standing or walking.',
      'Practice exercises that strengthen your core muscles to support good posture.'
    ]
  },
  {
    topic: 'Stress Management',
    tips: [
      'Practice deep breathing exercises to reduce stress.',
      'Take breaks and give yourself time to relax during the day.',
      'Engage in physical activity to help manage stress.',
      'Maintain a healthy work-life balance.',
      'Consider talking to a professional if stress becomes overwhelming.'
    ]
  },
  {
    topic: 'Back Health',
    tips: [
      'Lift heavy objects with your legs, not your back.',
      'Maintain good posture to avoid back pain.',
      'Incorporate exercises that strengthen your back muscles.',
      'Avoid sitting for long periods without taking breaks.',
      'Sleep on a mattress that supports your back properly.'
    ]
  },
  {
    topic: 'Mental Resilience',
    tips: [
      'Stay connected with friends and family for support.',
      'Practice mindfulness or meditation to build resilience.',
      'Set realistic goals and take small steps to achieve them.',
      'Focus on what you can control and let go of what you cannot.',
      'Seek help if you feel overwhelmed or anxious.'
    ]
  },
  {
    topic: 'Hygiene',
    tips: [
      'Wash your hands regularly with soap and water.',
      'Shower daily to maintain good personal hygiene.',
      'Keep your nails trimmed and clean.',
      'Brush your teeth twice a day and floss daily.',
      'Wear clean clothes and change them regularly.'
    ]
  },
  {
    topic: 'Hydration',
    tips: [
      'Drink at least 8 glasses of water a day.',
      'Start your day with a glass of water to kickstart hydration.',
      'Carry a water bottle with you to remind yourself to drink regularly.',
      'Eat water-rich foods like fruits and vegetables.',
      'Limit sugary drinks and alcohol, which can dehydrate you.'
    ]
  },
  {
    topic: 'Bone and Joint Health',
    tips: [
      'Stay active to maintain strong bones and joints.',
      'Include calcium and vitamin D in your diet.',
      'Maintain a healthy weight to reduce stress on joints.',
      'Avoid repetitive motions that can strain your joints.',
      'Get regular check-ups to monitor bone health, especially as you age.'
    ]
  }
];

const HealthcareSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTopics = topicsData.filter((topicData) => topicData.topic.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Healthcare Tips
      </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Find personalized healthcare tips tailored to your unique needs and goals.
        </Typography>
      <Box >
        <TextField
          label="Search Topics"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Grid container spacing={2} mt={3}>
        {filteredTopics.map((topicData, index) => (
          <Grid item xs={12} key={index}>
            <Card>
              <Typography sx={{ margin: 3 }} variant="h6" gutterBottom>
                {topicData.topic}
              </Typography>
              <Divider sx={{ margin: '8px 0', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
              <CardContent>
                {topicData.tips.map((tip, tipIndex) => (
                  <Typography variant="body2" key={tipIndex} gutterBottom>
                    • {tip}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HealthcareSection;

// import React, { useState, useEffect } from 'react';
// import { Container, Select, MenuItem, Typography, Grid, Card, CardContent, CircularProgress } from '@mui/material';

// const topics = [
//   'Heart', 'Eyes', 'Ears', 'Hair', 'Skin', 'Nutrition', 'Fitness', 'Mental Health',
//   'Immunity', 'Respiratory Health', 'Digestive Health', 'Bone and Joint Health', 'Sleep'
// ];

// const mockHealthTips = {
//   Heart: [{ title: 'Heart Tip 1', description: 'Exercise regularly to maintain a healthy heart.' }],
//   Eyes: [{ title: 'Eyes Tip 1', description: 'Take breaks from screens to avoid eye strain.' }],
//   Ears: [{ title: 'Ears Tip 1', description: 'Avoid loud noises to protect your hearing.' }],
//   Hair: [{ title: 'Hair Tip 1', description: 'Use a mild shampoo to keep your hair healthy.' }],
//   Skin: [{ title: 'Skin Tip 1', description: 'Apply sunscreen to protect your skin from UV rays.' }],
//   Nutrition: [{ title: 'Nutrition Tip 1', description: 'Eat a balanced diet rich in fruits and vegetables.' }],
//   Fitness: [{ title: 'Fitness Tip 1', description: 'Incorporate both cardio and strength training in your routine.' }],
//   'Mental Health': [{ title: 'Mental Health Tip 1', description: 'Practice mindfulness to reduce stress.' }],
//   Immunity: [{ title: 'Immunity Tip 1', description: 'Get enough sleep to boost your immune system.' }],
//   'Respiratory Health': [{ title: 'Respiratory Health Tip 1', description: 'Avoid smoking to keep your lungs healthy.' }],
//   'Digestive Health': [{ title: 'Digestive Health Tip 1', description: 'Include fiber in your diet for better digestion.' }],
//   'Bone and Joint Health': [{ title: 'Bone and Joint Health Tip 1', description: 'Stay active to maintain strong bones and joints.' }],
//   Sleep: [{ title: 'Sleep Tip 1', description: 'Maintain a regular sleep schedule for better rest.' }],
// };

// const fetchHealthTips = async (topic) => {
//   // Simulate an API call
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(mockHealthTips[topic] || []), 500);
//   });
// };

// const HealthcareSection = () => {
//   const [selectedTopic, setSelectedTopic] = useState(topics[0]);
//   const [tips, setTips] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     fetchHealthTips(selectedTopic).then((data) => {
//       setTips(data);
//       setLoading(false);
//     });
//   }, [selectedTopic]);

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Healthcare Tips
//       </Typography>
//       <Select
//         value={selectedTopic}
//         onChange={(e) => setSelectedTopic(e.target.value)}
//         variant="outlined"
//         style={{ marginBottom: '20px', minWidth: '200px' }}
//       >
//         {topics.map((topic) => (
//           <MenuItem key={topic} value={topic}>
//             {topic}
//           </MenuItem>
//         ))}
//       </Select>
//       {loading ? (
//         <CircularProgress />
//       ) : (
//         <Grid container spacing={2}>
//           {tips.map((tip, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6" gutterBottom>
//                     {tip.title}
//                   </Typography>
//                   <Typography variant="body2">{tip.description}</Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       )}
//     </Container>
//   );
// };

// export default HealthcareSection;
