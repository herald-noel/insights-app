import PropsTypes from 'prop-types'
import { Box, InputLabel, Input } from '@mui/material'
const UploadImage = (props) => {
  const { handleImageUpload, isNew } = props
  return (
    <Box
      display="flex"
      alignItems="center"
      marginBottom={2}
      sx={{
        '& > *': {
          marginRight: 2,
        },
      }}
    >
      <InputLabel htmlFor="thumbnail-input" sx={{ fontWeight: 'bold' }}>
        {!isNew && 'Change '}
        Thumbnail:
      </InputLabel>
      <Input
        id="thumbnail-input"
        type="file"
        name="thumbnail"
        accept="image/png, image/jpeg, image/jpg"
        onChange={handleImageUpload}
      />
    </Box>
  )
}

UploadImage.propTypes = {
  handleImageUpload: PropsTypes.func.isRequired,
  isNew: PropsTypes.bool.isRequired,
}

export default UploadImage
