
    public class PangramChecker {
        public static void main(String[] args) {
            String input = "The quick brown fox jumps over the lazy dog";
            boolean isPangram = isPangram(input.toLowerCase());
            System.out.println("Is it a pangram? " + isPangram);
        }
    
        public static boolean isPangram(String str) {
            boolean[] alphabet = new boolean[26];
            int length = str.length();
    
            for (int i = 0; i < length; i++) {
                char c = str.charAt(i);
                if (c >= 'a' && c <= 'z') {
                    alphabet[c - 'a'] = true;
                }
            }
    
            for (boolean isPresent : alphabet) {
                if (!isPresent) {
                    return false;
                }
            }
    
            return true;
        }
    }
    
    

