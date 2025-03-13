import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { DailyQuote } from '../components/DailyQuote';
import { Home } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface Exercise {
  name: string;
  sets: string;
  reps: string;
  description: string;
  images: string[];
}

const workoutPlans: Record<string, { focus: string; exercises: Exercise[]; message?: string; images?: string[] }> = {
  monday: {
    focus: 'Chest & Triceps',
    exercises: [
      {
        name: 'Bench Press',
        sets: '4 sets',
        reps: '8-12 reps',
        description: 'The king of chest exercises. Focus on controlled movement and proper form to maximize chest engagement.',
        images: [
          'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2021/09/bench-press.gif?fit=600%2C600&ssl=1',
          'https://i.pinimg.com/originals/51/1f/75/511f758a1ef6d337f075b820c4cc49de.gif',
        ]
      },
      {
        name: 'Incline Dumbbell Press',
        sets: '3 sets',
        reps: '10-12 reps',
        description: 'Targets the upper chest. Keep your core tight and back flat against the bench.',
        images: [
          'https://musclemagfitness.com/wp-content/uploads/incline-dumbbell-bench-press-exercise.gif',
          'https://downloads.ctfassets.net/6ilvqec50fal/5nCXO5eQriTOyt4tINYpfW/f0c9084b8d2aea66a83835541fc7be12/Incline_Dumbbell_Chest_Press.gif'
        ]
      },
      {
        name: 'Tricep Pushdowns',
        sets: '3 sets',
        reps: '12-15 reps',
        description: 'Isolate your triceps. Keep your elbows tucked and focus on the mind-muscle connection.',
        images: [
          'https://musclemagfitness.com/wp-content/uploads/cable-tricep-pushdown-exercise.gif',
          'https://barbend.com/wp-content/uploads/2019/03/tricep-press-down-barbend-movement-gif-masters-1.gif'
        ]
      }
    ]
  },
  tuesday: {
  focus: 'Back & Biceps',
  exercises: [
    {
      name: 'Lat Pulldown',
      sets: '4 sets',
      reps: '8-12 reps',
      description: 'Focus on pulling through your elbows and squeezing your lats at the bottom of the movement.',
      images: [
        'https://www.inspireusafoundation.org/wp-content/uploads/2022/08/wide-grip-lat-pulldown.gif',
        'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/02/400x400_How_To_Do_The_Lat_Pull_Down_Lat_Pull_Down.gif?h=840'
      ]
    },
    {
      name: 'Seated Cable Row',
      sets: '3 sets',
      reps: '10-12 reps',
      description: 'Keep your chest up and pull towards your waist. Avoid using momentum.',
      images: [
        'https://barbend.com/wp-content/uploads/2023/03/seated-cable-row-barbend-movement-gif-masters.gif',
        'https://burnfit.io/wp-content/uploads/2023/11/SEATED_CABLE_ROW.gif'
      ]
    },
    {
      name: 'Barbell Curl',
      sets: '3 sets',
      reps: '12-15 reps',
      description: 'Keep your elbows locked at your sides and focus on squeezing your biceps at the top.',
      images: [
        'https://barbend.com/wp-content/uploads/2024/01/barbell-curl-barbend-movement-gif-masters.gif',
        'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/04/preacher-curl-barbell.gif?resize=600%2C600&ssl=1'
      ]
    }
  ]
},
wednesday: {
  focus: 'Shoulders & Abs',
  exercises: [
    {
      name: 'Overhead Shoulder Press',
      sets: '4 sets',
      reps: '8-12 reps',
      description: 'Press the weight overhead while keeping your core tight and avoiding arching your lower back.',
      images: [
        'https://barbend.com/wp-content/uploads/2024/04/z-press-barbend-movement-gif-masters.gif',
        'https://media.tenor.com/411tsEoTwCoAAAAM/akim-williams.gif',
        'https://cdn.jefit.com/assets/img/exercises/gifs/447.gif',
        'https://www.happiesthealth.com/wp-content/uploads/2024/01/Shoulder-press-GIF.gif'
      ]
    },
    {
      name: 'Lateral Raises',
      sets: '3 sets',
      reps: '12-15 reps',
      description: 'Raise the dumbbells to the sides until they’re at shoulder level. Focus on controlled movement.',
      images: [
        'https://gifdb.com/images/thumbnail/lateral-raises-with-dumbbell-rhs3bqi0xhims66p.gif',
        'https://64.media.tumblr.com/0876f1325c265c83db7e4f32f4334c29/tumblr_omyfcycPaC1tll8wxo1_500.gif'
      ]
    },
    {
      name: 'Plank',
      sets: '3 sets',
      reps: '30-60 seconds',
      description: 'Keep your body in a straight line from head to heels. Engage your core throughout the movement.',
      images: [
        'https://i.pinimg.com/originals/71/39/d1/7139d152892319a5f61b64bab693c685.gif',
        'https://64.media.tumblr.com/3aab8e0ac69b68037016d87943826c12/tumblr_nv76ntW6kE1re9gg7o1_1280.gif',
        'https://i0.wp.com/post.healthline.com/wp-content/uploads/2021/05/400x400-Plank_Reach_Under.gif?h=840',
        'https://media4.giphy.com/media/KhIfGbxv76PeTrNq0Z/giphy.gif?cid=6c09b95232jqbsavtmvsn7ha6ip2qva5znq6v5aquszg90qn&ep=v1_gifs_search&rid=giphy.gif&ct=g'
      ]
    },
    {
      name: 'Hanging Leg Raise',
      sets: '3 sets',
      reps: '10-12 reps',
      description: 'Raise your legs while keeping them straight, engaging your lower abs. Avoid swinging.',
      images: [
        'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/hanging-leg-raise.gif',
        'https://media.post.rvohealth.io/wp-content/uploads/sites/2/2019/05/GYM-EQUIPMENT-ABS_HANGING-LEG-CIRCLES.gif'
      ]
    }
  ]
},
  thursday: {
  focus: 'Legs',
  exercises: [
    {
      name: 'Squats',
      sets: '4 sets',
      reps: '8-12 reps',
      description: 'Keep your chest up, core tight, and push through your heels to engage your quads and glutes.',
      images: [
        'https://hips.hearstapps.com/hmg-prod/images/workouts/2017/04/barbellsquat-1491916408.gif?crop=1xw:1xh;center,top&resize=980:*',
        'https://images.squarespace-cdn.com/content/v1/54f9e84de4b0d13f30bba4cb/1530743422771-2HFL0IYU8YM7P71TFLGT/Goblet+squat.gif'
      ]
    },
    {
      name: 'Romanian Deadlifts',
      sets: '3 sets',
      reps: '10-12 reps',
      description: 'Hinge at the hips, keeping a slight bend in your knees, and lower the weight while feeling a stretch in your hamstrings.',
      images: [
        'https://hips.hearstapps.com/hmg-prod/images/workouts/2017/05/stiffleggeddeadlift-1496166270.gif?crop=1xw:0.75xh;center,top&resize=1200:*',
        'https://gymbeam.cz/blog/wp-content/uploads/2024/10/Rumunsky-mrtvy-tah.gif'
      ]
    },
    {
      name: 'Walking Lunges',
      sets: '3 sets',
      reps: '12-15 steps per leg',
      description: 'Step forward into a lunge while keeping your torso upright. Push through your front heel to return to standing.',
      images: [
        'https://www.workedoutfitness.com/static/images/walking-lunge.gif',
        'https://media0.giphy.com/media/3o6oztVKqYpQsqsmNa/giphy.gif?cid=6c09b952bmmrmkt0mr791g2xl1t2noziagip4fi0yesbrv6q&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://musclemagfitness.com/wp-content/uploads/womens-dumbbell-elevated-split-squat-exercise.gif'
      ]
    },
    {
      name: 'Leg Press',
      sets: '3 sets',
      reps: '10-12 reps',
      description: 'Place your feet shoulder-width apart on the platform and push through your heels while avoiding locking out your knees.',
      images: [
        'https://i.pinimg.com/originals/1c/2b/8e/1c2b8ebbeb29f6c474bed7b5287c5937.gif',
        'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/leg-press.gif?fit=600%2C600&ssl=1'
      ]
    }
  ]
},
  friday: {
  focus: 'Upper Body',
  exercises: [
    {
      name: 'Push-ups',
      sets: '4 sets',
      reps: '15-20 reps',
      description: 'A great bodyweight exercise to activate your chest, shoulders, and triceps. Keep your body in a straight line.',
      images: [
        'https://www.inspireusafoundation.org/wp-content/uploads/2022/11/push-up.gif'
      ]
    },
    {
      name: 'Pull-ups',
      sets: '3 sets',
      reps: '6-10 reps',
      description: 'Use an overhand grip, pull yourself up while engaging your back and biceps. Focus on form, not just reps.',
      images: [
        'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/pull-up.gif?resize=600%2C600&ssl=1',
        'https://media.post.rvohealth.io/wp-content/uploads/sites/2/2019/05/PULL-UPS_PARTNER-ASSISTED.gif'
      ]
    },
    {
      name: 'Dumbbell Shoulder Press',
      sets: '3 sets',
      reps: '8-12 reps',
      description: 'Press the dumbbells overhead while keeping your core engaged and back straight.',
      images: [
        'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/02/Dumbbell-shoulder-press.gif?fit=600%2C600&ssl=1',
        'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/11/Seated-dumbbell-shoulder-press.gif?fit=600%2C600&ssl=1'
      ]
    },
    {
      name: 'Bicep Curls',
      sets: '3 sets',
      reps: '12-15 reps',
      description: 'Use a controlled motion and focus on the contraction at the top of the curl for maximum bicep activation.',
      images: [
        'https://media1.giphy.com/media/51Ze6SxVtXB8T7IQm9/200.gif?cid=6c09b952iawn45rikyz1ss3nwov9l9uhbq0z1z77mt345zye&ep=v1_gifs_search&rid=200.gif&ct=g',
        'https://www.strengthlog.com/wp-content/uploads/2020/10/Incline-Dumbbell-Curl.gif'
      ]
    }
  ]
},
  saturday: {
  focus: 'Lower Body',
  exercises: [
    {
      name: 'Deadlifts',
      sets: '4 sets',
      reps: '6-10 reps',
      description: 'Hinge at the hips, keep your back straight, and engage your glutes and hamstrings to lift the weight.',
      images: [
        'https://www.journalmenu.com/wp-content/uploads/2018/04/how-to-do-a-deadlift-slow-gif.gif',
        'https://www.nerdfitness.com/wp-content/uploads/2020/01/deadlift-deficit.gif'
      ]
    },
    {
      name: 'Leg Curls (Hamstring Focus)',
      sets: '3 sets',
      reps: '12-15 reps',
      description: 'Control the movement as you curl the weight with your hamstrings and avoid using momentum.',
      images: [
        'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/leg-curl-seated.gif',
        'https://149874912.v2.pressablecdn.com/wp-content/uploads/2020/03/leg-curl-lying.gif'
      ]
    },
    {
      name: 'Bulgarian Split Squats',
      sets: '3 sets',
      reps: '10-12 reps per leg',
      description: 'Elevate your rear foot on a bench and squat down with your front leg while keeping your torso upright.',
      images: [
        'https://media1.giphy.com/media/g0Kz180GdPYCsKqMyf/giphy.gif?cid=6c09b952696w2qgx1zz21o871ecxa9efri65rf9277hlmjse&ep=v1_gifs_search&rid=giphy.gif&ct=g',
        'https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2023/02/Bulgarian-split-squat-barbell.gif?fit=600%2C600&ssl=1'
      ]
    },
    {
      name: 'Glute Bridges',
      sets: '3 sets',
      reps: '15 reps',
      description: 'Lie on your back with knees bent and feet flat. Lift your hips by squeezing your glutes at the top of the movement.',
      images: [
        'https://images-prod.healthline.com/hlcmsresource/images/topic_centers/Fitness-Exercise/648x364_5_Glute_Bridge_Variations_Press_Through_Toes.gif',
        'https://post.healthline.com/wp-content/uploads/2020/11/400x400_24_Standing_Ab_Exercises_to_Strengthen_and_Define_Your_Core_Barbell_Hip_Thrust.gif'
      ]
    }
  ]
},



  // ... (other workout days)
  sunday: {
    focus: 'Rest Day',
    exercises: [],
    message: "Today is your well-deserved rest day! Rest and recovery are crucial components of any successful fitness journey. Use this time to:\n\n- Get adequate sleep\n- Practice light stretching or yoga\n- Stay hydrated\n- Plan your meals for the week\n- Reflect on your progress",
    images: [
      'https://media.tenor.com/Mtdj8-zXLE4AAAAM/day-off-my-day-off.gif',
      'https://media0.giphy.com/media/CQ9L1PcarFKSQ9z8mP/giphy.gif?cid=6c09b952nukbypk2cpo5angk4twtcz9xsaj3bzmsxdaowv21&ep=v1_gifs_search&rid=giphy.gif&ct=g',
      
    ]
  }
};

export function WorkoutDay() {
  const { day } = useParams<{ day: string }>();
  const workout = day ? workoutPlans[day.toLowerCase()] : null;

  if (!workout) {
    return <div>Workout not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            {day?.toUpperCase()} - {workout.focus}
          </h1>
          <Link
            to="/"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-6 py-3 rounded-full transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </div>
        
        <div className="mb-12">
          <DailyQuote />
        </div>

        {workout.focus === 'Rest Day' ? (
          <div className="text-center space-y-8">
            <div className="p-12 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10">
              <h2 className="text-3xl font-semibold mb-6">Rest & Recovery Day</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto whitespace-pre-line">
                {workout.message}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {workout.images?.map((image, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden aspect-video"
                >
                  <img
                    src={image}
                    alt={`Rest day inspiration ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {workout.exercises.map((exercise, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row gap-8 bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
              >
                <div className="lg:w-1/2">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
                    {exercise.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`rounded-2xl overflow-hidden ${
                          exercise.images.length === 1 ? 'sm:col-span-2' : ''
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${exercise.name} view ${imgIndex + 1}`}
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                    {exercise.name}
                  </h3>
                  <p className="text-gray-300 text-lg mb-6">{exercise.description}</p>
                  <div className="flex gap-6">
                    <div className="bg-blue-500/20 rounded-xl px-6 py-3">
                      <span className="block text-sm text-gray-300">Sets</span>
                      <span className="text-xl font-semibold">{exercise.sets}</span>
                    </div>
                    <div className="bg-purple-500/20 rounded-xl px-6 py-3">
                      <span className="block text-sm text-gray-300">Reps</span>
                      <span className="text-xl font-semibold">{exercise.reps}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
}