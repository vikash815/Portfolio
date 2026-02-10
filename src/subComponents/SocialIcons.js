import { motion } from "framer-motion";
import styled from "styled-components";
import { Github, Gmail, LeetCode, LinkedIn } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const SocialIcons = (props) => {
  const iconColor = props.theme === "dark" ? DarkTheme.text : DarkTheme.body;

  return (
    <Icons>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          href="https://github.com/vikash815"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <Github width={25} height={25} fill={iconColor} />
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          href="mailto:gvikashkumar37@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <Gmail width={25} height={25} fill={iconColor} />
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          href="https://linkedin.com/in/vikash815"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <LinkedIn width={25} height={25} fill={iconColor} />
        </a>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          href="https://leetcode.com/u/vikash815/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit" }}
        >
          <LeetCode width={25} height={25} fill={iconColor} />
        </a>
      </motion.div>

      <Line
        color={props.theme}
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
