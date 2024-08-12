import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
// import { Card, CardHeader, CardContent, Divider, Grid } from '@mui/material';
// project import
import Breadcrumb from 'component/Breadcrumb';
// import { gridSpacing } from 'config.js'
import { Card, CardContent, Typography, Box, Grid, Divider } from '@mui/material';
import { styled } from '@mui/system';

// ==============================|| TYPOGRAPHY ||============================== //
const data = {
  'Cardiac (Heart) Science': [
    'Interventional Cardiology',
    'Pediatric Interventional Cardiology',
    'Cardiac Surgery',
    'Pediatric Cardiac Surgery',
    'Non interventional Cardiology',
    'Cardiac Anesthesia'
  ],
  'Oncology (Cancer) Science': [
      'Medical Oncology',
      'Surgical Oncology',
      'Radiation Oncology',
      'Hemato Oncology',
      'Radio active therapy',
      'Palliative care'
    ],
    Dental: ['General Dentistry', 'Oral and Maxillofacial Surgery & Implantology', 'Pedo Dontist', 'Ortho Dontist', 'Endo Dontist'],
    Transplant: [
        'Kidney Transplant',
        'Liver Transplant',
        'Bone Marrow Transplant',
        'Cornea Transplant',
        'Heart and Lung Transplant',
        'Hand Transplant'
    ],
    Medicine: [
      'General Medicine',
      'Endocrinology',
      'Respiratory Medicine (TB & Chest)',
      'Hepatology & Gastroenterology',
      'Critical Care Medicine (ICU)'
    ],
    Surgery: [
      'General & Laparoscopic Surgery',
      'Hepato Pancreatic Biliary (HPB) Surgery',
      'Bariatric & Metabolic Surgery',
      'Colorectal Surgery'
    ],
    'Pediatric Science': ['Pediatrics & Neonatology', 'Pediatric Surgery', 'Pediatric Critical Care'],
    'Ophthalmology (Eye) Science': ['Comprehensive Ophthalmology', 'Cornea, Cataract and Refractive Surgery', 'Retinal Science'],
'Hyperbaric Oxygen Therapy (HBOT)': ['Anti Aging (Rejuvenation)', 'Oxygen Therapy'],
  Psychiatry: ['De Addiction Clinic', 'Mind Care Clinic'],
  'Renal (Kidney) Science': ['Nephrology', 'Urology'],
  'Cosmetic and Reconstructive Science': ['Plastic & Reconstructive Surgery', 'Dermatology & Cosmetology'],
  Orthopaedic: ['Trauma and Arthroscopy Surgery', 'Joint Replacement Surgery'],
  Neuroscience: ['Neurology', 'Brain & Spine Surgery'],
  'Interventional Radiology': ['Neuro Interventional Radiology', 'Peripheral Interventional Radiology'],
  ENT: ['Ear, Nose & Throat', 'Audiologist and Speech therapist'],
  'Gynaecology & Obstetrics': ['Obstetrics & Gynaecology', 'IVF'],
  Anaesthesia: ['General Anaesthesia', 'Pain Management'],
};

const CustomCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.2s, box-shadow 0.5s, border 0.5s',
  borderRadius: theme.spacing(2),
  border: '1px solid transparent',
  '&:hover': {
    // transform: 'scale(1.01) ',
    boxShadow: '0 0px 20px rgba(51, 102, 255, 0.1)', // Custom shadow color
    border: `1px solid rgba(51, 102, 255, 0.4)` // Border on hover
  },
  marginBottom: theme.spacing(2),
  height: '100%'
}));

const DepartmentCard = ({ title, subDepartments }) => (
  <CustomCard>
    <CardContent>
      <Typography variant="h6" color="primary">
        {title}
      </Typography>
      <Divider sx={{ margin: '8px 0', borderColor: 'rgba(0, 0, 0, 0.12)' }} />
      <Box component="ul" sx={{ paddingLeft: 2 }}>
        {subDepartments.map((sub, index) => (
          <Typography component="li" key={index} variant="body2">
            {sub}
          </Typography>
        ))}
      </Box>
    </CardContent>
  </CustomCard>
);

const Specialities = () => {
  return (
    <>
      <Breadcrumb title="Specialities">
        <Typography component={Link} to="/" variant="subtitle2" color="inherit" className="link-breadcrumb">
          Home
        </Typography>
        <Typography variant="subtitle2" color="primary" className="link-breadcrumb">
          Services
        </Typography>
      </Breadcrumb>
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={2}>
          {Object.entries(data).map(([title, subDepartments], index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <DepartmentCard title={title} subDepartments={subDepartments} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* <Grid container spacing={gridSpacing}>
        <Grid item>
          <Card>
            <CardHeader
              title={
                <MuiTypography component="span" className="card-header">
                  Specialities
                </MuiTypography>
              }
            />
            <Divider />
            <CardContent>
              
            </CardContent>
          </Card>
        </Grid>
      </Grid> */}
    </>
  );
};

export default Specialities;
