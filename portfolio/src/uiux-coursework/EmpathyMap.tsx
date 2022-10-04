import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";

const styles = {
  parent: {
    width: 840,
    height: 840,
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'teal',
  },
  quadrant: {
    width: 420,
    height: 420,
    border: '1px',
    borderStyle: 'solid',
    borderColor: 'teal',
  },
  thoughtBox: {
    width: 200,
    height: 150,
    borderRadius: 5,
    boxShadow: '0px 0px 5px gray',
    padding: '20px 30px',
    color: 'teal',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameBox: {
    left: 270,
    top: 370,
    height: 100,
    width: 300,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
  },
  textBox: {
    marginTop: '-5px',
  },
}

interface Persona {
  thinks: string[],
  feels: string[],
  says: string[],
  does: string[],
}

interface EmpathyMapProps {
  personaName: string,
  persona: Persona,
}

const EmpathyMap = (props: EmpathyMapProps) => {
  const { personaName, persona} = props;
  const { thinks, feels, says, does, } = persona;

  return (
    <Grid
      templateColumns={'repeat(2, 1fr)'}
      gap={0}
      style={{...styles.parent, position: 'relative'}}>
      <Box style={{...styles.nameBox, position: 'absolute'}} bg='teal.300'>
        <Heading size='lg' style={{marginTop: '-5px'}} color='white'>
          {personaName}
        </Heading>
      </Box>
      <GridItem style={{...styles.quadrant, position: 'relative'}} bg='teal.100'>
        <Heading style={{position: 'absolute', left: 25, top: 15, color: 'teal'}}>
          Thinks
        </Heading>
        <Box style={{...styles.thoughtBox, position: 'absolute', left: 25, top: 250}} bg='white'>
          <Box style={styles.textBox}>
            {thinks[3]}
          </Box>
        </Box>
        <Box style={{...styles.thoughtBox, position: 'absolute', left: 200, top: 200}} bg='white'>
          <Box style={styles.textBox}>
            {thinks[2]}
          </Box>
        </Box>
        <Box style={{...styles.thoughtBox, position: 'absolute', left: 25, top: 75}} bg='white'>
          <Box style={styles.textBox}>
            {thinks[1]}
          </Box>
        </Box>
        <Box style={{...styles.thoughtBox, position: 'absolute', left: 200, top: 25}} bg='white'>
          <Box style={styles.textBox}>
            {thinks[0]}
          </Box>
        </Box>
      </GridItem>
      <GridItem style={{...styles.quadrant, position: 'relative'}} bg='teal.100'>
        <Heading style={{position: 'absolute', right: 25, top: 15, color: 'teal'}}>
          Feels
        </Heading>
        {feels[3] ? 
        <Box style={{...styles.thoughtBox, position: 'absolute', right: 25, top: 250}} bg='white'>
          <Box style={styles.textBox}>
            {feels[3]}
          </Box>
        </Box>
        :<div></div>}
        <Box style={{...styles.thoughtBox, position: 'absolute', right: 200, top: 200}} bg='white'>
          <Box style={styles.textBox}>
            {feels[2]}
          </Box>
        </Box>
        <Box style={{...styles.thoughtBox, position: 'absolute', right: 25, top: 75}} bg='white'>
          <Box style={styles.textBox}>
            {feels[1]}
          </Box>
        </Box>
        <Box style={{...styles.thoughtBox, position: 'absolute', right: 200, top: 25}} bg='white'>
          <Box style={styles.textBox}>
            {feels[0]}
          </Box>
        </Box>
      </GridItem>
      <GridItem style={{...styles.quadrant, position: 'relative'}} bg='teal.100'>
        <Heading style={{position: 'absolute', left: 25, bottom: 15, color: 'teal'}}>
          Says
        </Heading>
        <Box style={{...styles.thoughtBox, position: 'absolute', left: 25, bottom: 250}} bg='white'>
          <Box style={styles.textBox}>
            {says[0]}
          </Box>
        </Box>
        <Box style={{...styles.thoughtBox, position: 'absolute', left: 200, bottom: 200}} bg='white'>
          <Box style={styles.textBox}>
            {says[1]}
          </Box>
        </Box>
        <Box style={{...styles.thoughtBox, position: 'absolute', left: 25, bottom: 75}} bg='white'>
          <Box style={styles.textBox}>
            {says[2]}
          </Box>
        </Box>
        {says[3] ? 
        <Box style={{...styles.thoughtBox, position: 'absolute', left: 200, bottom: 25}} bg='white'>
          <Box style={styles.textBox}>
            {says[3]}
          </Box>
        </Box>
        : <div></div>}
      </GridItem>
      <GridItem style={{...styles.quadrant, position: 'relative'}} bg='teal.100'>
      <Heading style={{position: 'absolute', right: 25, bottom: 15, color: 'teal'}}>
        Does
      </Heading>
        <Box style={{...styles.thoughtBox, position: 'absolute', right: 25, bottom: 250}} bg='white'>
          <Box style={styles.textBox}>
            {does[0]}
          </Box>
        </Box>
        <Box style={{...styles.thoughtBox, position: 'absolute', right: 200, bottom: 200}} bg='white'>
          <Box style={styles.textBox}>
            {does[1]}
          </Box>
        </Box>
        <Box style={{...styles.thoughtBox, position: 'absolute', right: 25, bottom: 75}} bg='white'>
          <Box style={styles.textBox}>
            {does[2]}
          </Box>
        </Box>
        {does[3] ? 
        <Box style={{...styles.thoughtBox, position: 'absolute', right: 200, bottom: 25}} bg='white'>
          <Box style={styles.textBox}>
            {does[3]}
          </Box>
        </Box>
        : <div></div>}
      </GridItem>
    </Grid>
  );
}

export default EmpathyMap;
