/*
    @author will ross 3734692
 */
//All Song info was all found on https://www.joe.ie/music/the-50-most-iconic-songs-of-all-time-have-been-revealed-513205

public class Driver {

    public static void main(String[] args) throws Exception {

        PlayList playList = new PlayList();
        //Adding 11 songs to our play list

        Song s1 = new Song(440, "Nirvana", "Smells Like Teen Spirit");
        Song s2 = new Song(420, "John Lennon", "Imagine");
        Song s3 = new Song(438, "U2", "One");
        Song s4 = new Song(421, "Michael Jackson", "Billie Jean");
        Song s5 = new Song(406,  "Queen", "Bohemian Rhapsody");
        Song s6 = new Song(451, "The Beatles", "Hey Jude");
        Song s7 = new Song(393, "Bob Dylan", "Like A Rolling Stone");
        Song s8 = new Song(473, "Rolling Stones", "I Can't Get No Satisfaction");
        Song s9 = new Song(487, "Sex Pistols", "God Save The Queen");
        Song s10 = new Song(457, "Guns N' Roses", "Sweet Child O'Mine");
        Song s11 = new Song(435, "The Clash", "London Calling");

        playList.add(s1);
        playList.add(s2);
        playList.add(s3);
        playList.add(s4);
        playList.add(s5);
        playList.add(s6);
        playList.add(s7);
        playList.add(s8);
        playList.add(s9);
        playList.add(s10);
        playList.add(s11);


        //printing the play list
        System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
        System.out.println("The first print statement with 11 songs added:\n");
        playList.print();
        System.out.println();

        System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");


        //remove some items from play list
        System.out.println("The print statement with 2 songs removed:");
        playList.remove(s3);
        playList.remove(s11);
        System.out.println();



        //print again
        playList.print();
        System.out.println();

        System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");


        //add more songs to the play list

        System.out.println("The print statement with 3 songs added:\n");


        Song s12 = new Song(452, "The Kinks", "Waterloo Sunset");
        Song s13 = new Song(434, "The Eagles", "Hotel California");
        Song s14 = new Song(461, "Elton John", "Your Song");
        playList.add(s12);
        playList.add(s13);
        playList.add(s14);
        playList.print();
        System.out.println();


        System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");


        //print in reversed order

        System.out.println("Printing our play list in reverse order:\n");

        Song[] reversed = playList.getReversedList();
        System.out.println("PlayList:");
        for(int i = 0; i < playList.getNumSongs(); i++){
            System.out.println(reversed[i]);
        }

        System.out.println();

        System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");



        //try to print an item that isn't there

        System.out.println("Attempting to remove a song from our playList that doesn't exist:\n");
        Song s15 = new Song(1, "Unknow Band", "Unknow Title");
        try{
            playList.remove(s15);
        }
        catch(Exception e){
            System.out.println(s15.toString() + " is currently not in this play list.");
        }
        System.out.println();


        System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");



        //get the count of items and print it

        System.out.println("The number of songs in our play list:\n");
        System.out.println(playList.getNumSongs());
        System.out.println();
        System.out.println("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");


    }
}
